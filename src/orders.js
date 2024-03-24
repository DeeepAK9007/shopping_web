import { collection, getDocs } from "firebase/firestore"
import { db } from "./helpers/firebase"

export default async function getOrders () {
    let col = collection(db, "orders");
    let orders = await getDocs(col);

    let ordersData = orders?.docs?.map(doc => {
        return {
            id: doc.id,
            merchId: doc.get("merch"),
            userId:doc.get('user'),
            delivery: doc.get("delivery"),
            fulfilled: doc.get("fulfilled"),
            orderedAt: doc.get("ordered_at"),
            quantity:doc.get("qnty"),
            size:doc.get('size'),
        }
    })

    return ordersData
}
