import React, { useContext } from "react";
//import { ShopContext } from "../../context/shop-context";

export function ProdRend(props)
{
    //const {addToCart} =useContext(ShopContext);

    return(
    <div className="products">    
        <div className="product">
            <img src={props.imgURL} />
            <div className="description">
                <h2>{props.name}</h2>
                <h3>{props.price}</h3>
            </div>

            <button className="addToCartBttn">Add to cart</button>
        </div>
    </div>    
    );
}



 