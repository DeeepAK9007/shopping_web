import React, { useEffect, useState } from 'react'
import {ProdRend} from "./prod_rend";
import "./shop.css";
import getProducts from '../../products'


function product(a)
{
    return(
        <div>
        <ProdRend key={a.id} name={a.name}  price={a.price} imgURL={a.photos[0]}/>
        </div>
    );
}


export const Shop = () => {
    let [ products, setProducts ] = useState([])

    useEffect(() => {
        getProducts().then(products => setProducts(products))
    }, [])
    
    return (
        <div className='shop'>
            <div>
                <h1 style={{textAlign:'center'}}>Sleazy-n-eazy clothing</h1>
            </div>
            <div className='products'>
                {products.map(product)}
            </div>
        </div>
    )
}
