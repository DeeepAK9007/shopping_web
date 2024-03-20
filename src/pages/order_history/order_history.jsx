import React, { useState } from "react";
import "./order_history.css";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../helpers/firebase";
import "firebase/firestore";
import {getDownloadURL, uploadBytes } from "firebase/storage";
import {ref} from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import getOrders from '../../orders';
import getProducts from '../../products';

function OrderHistory()
{
    const [ orders, setOrders ] = useState([]);
    const [ products, setProducts ] = useState([]);
    

    useEffect(() => {
        getProducts().then(getProducts_data => setProducts(getProducts_data))
    }, [])

    useEffect(() => {
        getOrders().then(getOrders_data => setOrders(getOrders_data));
    }, [])

    useEffect(() => {
        console.log('orders....',orders);
        console.log('products....',products);
        
    }, [orders,products])

   

    return(
        <div>
            <h1>Your Order History</h1>
        </div>
    );
}


export default OrderHistory;