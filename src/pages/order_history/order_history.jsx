import { useState,useContext, useEffect} from "react";
import "./order_history.css";
import "firebase/firestore";
import getOrders from '../../orders';
import getProducts from '../../products';
import { UserContext } from "../../context/UserContext";


// import React, { useState,useContext, useEffect} from "react";
// import { collection, addDoc } from "firebase/firestore";
// import { db, storage } from "../../helpers/firebase";
// import {getDownloadURL, uploadBytes } from "firebase/storage";
// import {ref} from "firebase/storage";
// import { useNavigate } from "react-router-dom";



function OrderHistory() {
    let user = useContext(UserContext);
    // console.log('user....',user);
    const [ orders, setOrders ] = useState([]);
    const [ products, setProducts ] = useState([]);
    const [ orderDetails, setOrderDetails ] = useState([]);
    

    useEffect(() => {
        getProducts().then(getProducts_data => setProducts(getProducts_data))
    }, [])

    useEffect(() => {
        getOrders().then(getOrders_data => setOrders(getOrders_data));
    }, [])

    useEffect(() => {
        // console.log('orders....',orders);
        // console.log('products....',products);
        const userOrders = orders?.filter(order => order.userId === user?.uid) || [];
        // console.log('userOrders.....',userOrders);


        const orderDetails = userOrders?.map(order => {
            const matchingProduct = products?.find(product => product.id === order.merchId) ?? {};
            return matchingProduct ? { ...order, ...matchingProduct } : null;
          }).filter(item => item !== null); 
          
          
        // console.log('orderDetails...', orderDetails);
        setOrderDetails(orderDetails);
               

        
    }, [orders,products])

   
    const cardStyle = {
        height:  '400px', 
        width: '800px',   
        backgroundColor: '#f0f0f0', 
        border: '1px solid #ccc',   
        borderRadius: '8px',       
        padding: '16px',            
        boxSizing: 'border-box',   
    }

    const centeredContainer = {
        display: 'flex',
        justifyContent: 'center', 
        marginTop: '20px',
        backgroundColor: '#f8f8f8', 
    };

    const pageStyle = {
        backgroundColor: '#f8f8f8', 
        minHeight: '100vh',
    };

    
    const cardTitle = {
        fontSize: '16px',
        fontWeight: 'bold',
    };

    const titleStyle = {
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
        textAlign: 'center'
      };

    const detailStyle = {
        fontSize: '16px',
        marginBottom: '8px',
        color: '#666',
        fontWeight: 'bold'
      };

      return(
        <>
            {user ? (
              <div style={pageStyle}>
                  <h1>Order History for {user.displayName}</h1>
                  {orderDetails.map((orderDetail) => (
                      <div className="centered-container" style={centeredContainer} key={orderDetail.id}>
                          <div className="card" style={cardStyle}>
                            <h3 style={titleStyle}>ORDER ID: {orderDetail.id}</h3>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{ flex: 1 ,...detailStyle}}>
                                    <div >Name: {orderDetail.name}</div><br/>
                                    <div >Price: {orderDetail.price}</div><br/>
                                    <div >Quantity: {orderDetail.quantity}</div><br />
                                    <div >Size: {orderDetail.size}</div><br/>
                                    <div >Delivery Status: {orderDetail.fulfilled ? 'Delivered' : 'In Transit'}</div><br/>
                                    <div >Delivery Address: {orderDetail.delivery}</div>
                                </div>
                                
                                <div>
                                <img src={orderDetail.photo[0]} alt="Product" style={{ maxHeight: '300px', borderRadius: '4px' }} />
                                </div>
                            </div>
                        </div>
                          
                      </div>
                  ))}
              </div>
       
            ) : (
                <div>Please log in to view your order history.</div>
            )}
        </>
      );
}




export default OrderHistory;