import React, { useEffect, useState } from 'react'
import {ProdRend} from "./prod_rend";
import "./shop.css";
import getProducts from '../../products'


function product(a)
{
    return(
        <ProdRend id={a.id} key={a.id} name={a.name}  price={a.price} imgURL = {a.photo[0]} />
    );
}


export const Shop = () => {
    let [ products, setProducts ] = useState([])

    useEffect(() => {
        getProducts().then(products => setProducts(products))
    }, [])

    return (
        <div className='shop'>
            <h1>NITK Merch Shop</h1>
            <div className='products'>
                {products.map(product)}
            </div>
        </div>
    )
}
