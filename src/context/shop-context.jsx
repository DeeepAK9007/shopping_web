// import React, { useState } from 'react'
// import { Products } from '../products';

// export const ShopContext= createContext(null);

// const getDefaultCart=() =>{
//     let cart ={}
//     for(let i=0; i<Products.length;i++)
//     {
//         cart[i]=0;
//     }
// }

// export const ShopContextProvider=(props) => {

//     const [cartItems,setCartItems]=useState(getDefaultCart());
//     const addToCart=(id)=> {
//         setCartItems((prev) => ({...prev,[id]:prev[id]+1}))
//     };

//     const removeFromCart=(id)=> {
//         setCartItems((prev) => ({...prev,[id]:prev[id]-1}))
//     };

//     const contextValue={cartItems,addToCart,removeFromCart};

//     console.log(cartItems);
//     return <ShopContext.Provider value={contextValue} >{props.children}</ShopContext.Provider>
// }