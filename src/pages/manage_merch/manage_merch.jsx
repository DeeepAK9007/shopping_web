import { useParams } from "react-router-dom"
import "./manage_merch.css"
import { useEffect, useState } from "react"
import { DocumentSnapshot, collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore"
import { db } from "../../helpers/firebase"
import MerchCard from "../../components/merch_card"

export default function ManageMerch () {
    let { merchId } = useParams()
    let [ merch, setMerch ] = useState(null)
    let [ orders, setOrders ] = useState([])
    let [ users, setUsers ] = useState(new Map())

    useEffect(() => {
        getData()
    }, [])

    async function getData () {
        let docRef = doc(db, "merch", merchId)
        let docPromise = getDoc(docRef)

        let q = query(collection(db, "orders"), where("merch", "==", merchId))
        let queryPromise = getDocs(q)

        let [ docSnap, qs ] = await Promise.all([ docPromise, queryPromise ])

        setMerch(docSnap.data())

        let orderData = qs.docs.map(doc => {
            return { ...doc.data(), id: doc.id }
        })

        let userPromises = new Map()
        qs.forEach(d => {
            let uid = d.get("user")
            if (!userPromises.has(uid)) {
                let docRef = doc(db, "users", uid)
                userPromises.set(uid, getDoc(docRef))
            }
        })

        let userDocs = await Promise.all(userPromises.values())

        let userData = new Map()
        for (let i of userDocs) {
            userData.set(i.id, i.data())
        }

        setUsers(userData)
        setOrders(orderData)
    }

    async function handleFulfill (id) {
        let res = confirm("Are you sure you would like to fulfill the order?")
        if (!res) return

        let docRef = doc(db, "orders", id)
        await setDoc(docRef, { fulfilled: true }, { merge: true })
        getData()
    }



    return (
        merch ? 
        <div className="manage-merch">
            <MerchCard merch={merch} />

            <div className="orders">
                {orders.map(order => (
                    <div className="order" key = {order.id}>
                        <div className="content">
                            <h3>{users.get(order.user).name}</h3>
                            <p>Size: {order.size}</p>
                            <p>Quantity: {order.qnty}</p>
                            <br />
                            <p>Delivery: {order.delivery}</p>
                        </div>
                        {
                            order.fulfilled ? 
                            <p className="success">✅ Already fulfilled</p>
                            :
                            <button onClick={() => handleFulfill(order.id)}>FULFILL</button>
                        }
                    </div>
                ))}
            </div>
        </div>
        : null
    )
}