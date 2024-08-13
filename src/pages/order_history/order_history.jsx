import { useState,useContext, useEffect} from "react";
import "./order_history.css";
import "firebase/firestore";
import getOrders from '../../orders';
import getProducts from '../../products';
import { UserContext } from "../../context/UserContext";

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

   

      return(
        <>
            {user && orderDetails.length > 0 ? (
              <div style={pageStyle}>
                  <h1 style={headerStyle}>Order History for {user.displayName}</h1>
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
                <div>
        {!user && <div><h1 style={conditionStyle}>Please log in to view your order history.</h1></div>}
        {user && orderDetails.length === 0 && <div><h1 style={conditionStyle}>No Orders Placed.</h1></div>}
    </div>
            )}
        </>
      );
}




export default OrderHistory;
