import { collection, getDocs } from "firebase/firestore"
import { db } from "./helpers/firebase"

export default async function getOrders () {
    const col = collection(db, "orders");
    const orders = await getDocs(col);

    const ordersData = orders?.docs?.map(doc => {
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


