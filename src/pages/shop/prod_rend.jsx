import React, { useContext, useState, useHistory, } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
//import { ShopContext } from "../../context/shop-context";

export function ProdRend(props)
{
    let user = useContext(UserContext);


    return(
        <div className="product">
            <img src={props.imgURL} />
            <div className="description">
                <h2>{props.name}</h2>
                <h3>Price: Rs.{props.price}</h3>
            </div>
            {user.uid == props.owner ?
                <Link className="addToCartBttn" to={`/manage/${props.id}`}>Manage</Link>
                :
                <Link className="addToCartBttn" to={`/merch/${props.id}`}>Own it!!</Link>
            }
        </div>
    );
}



 