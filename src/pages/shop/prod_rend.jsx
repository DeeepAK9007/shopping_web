import React, { useContext, useState, useHistory, } from "react";
import { Link } from "react-router-dom";
//import { ShopContext } from "../../context/shop-context";

export function ProdRend(props)
{
    //const {addToCart} =useContext(ShopContext);


    return(
        <div className="product">
            <img src={props.imgURL} />
            <div className="description">
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
            </div>
            <Link className="addToCartBttn" to={`/merch/${props.id}`}>Add to cart</Link>
        </div>
    );
}



 