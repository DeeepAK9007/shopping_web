import React from 'react'
import {Products} from "../../products";
import {ProdRend} from "./prod_rend";
import "./shop.css";


function product(a)
{
    return(
        <div>
        <ProdRend key={a.id} name={a.productName}  price={a.price} imgURL={a.productImage}/>
        </div>
    );
}


export const Shop = () => {
  return (
    <div className='shop'>
        <div>
            <h1 style={{textAlign:'center'}}>Sleazy-n-eazy clothing</h1>
        </div>
        <div className='products'>
            {Products.map(product)}
        </div>
    </div>
  )
}
