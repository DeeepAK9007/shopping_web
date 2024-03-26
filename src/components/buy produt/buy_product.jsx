import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../helpers/firebase";
import "./buy_prod.css";

function Buy()
{
    let {id}=useParams();
    let [merch,setMerch]=useState(null);
    let user = useContext(UserContext);

    useEffect(
        () => {
            getData()
        },[]
    )

    async function getData () 
    {
        let docRef = doc(db, "merch",id);

        let merch_doc=await getDoc(docRef);


        setMerch(
            {
                id:merch_doc.id,
                ...merch_doc.data(),
            }
        );
    }
    
    // console.log(id);

    async function place_order(e)
    {
        // console.log('e....',e);
        // console.log('size....',size);
        e.preventDefault();
        const uplo=await addDoc(collection(db,"orders"),{
            size:size,
            delivery:delivery,
            quantity:qnty,
            fulfilled:false,
            merch:id,
            user:user.uid
        })

        alert("your order has been placed successfully and is in transit");
    }

    let [size,setsize]=useState('XS');
    let [delivery,setdeli]=useState('');
    let [qnty,setqnty]=useState();

    // console.log(user.uid,size,delivery,qnty);

    return(
        merch ?
        <div className="out">
            <div className="cont">
                <h1>{merch.name}</h1>
                <img className="prod_img" src={merch.photo[0]}/>
            </div>
            <div className="cont right">
                <div className="price">
                    <p>Price: Rs.{merch.price}</p>
                </div>
                <div>
                    <form>
                        <br></br>
                        <input type="number" placeholder="Quantity" value={qnty} required onChange={e => setqnty(e.target.value)}></input>
                        <br></br><br></br>
                        <div className="size">
                            <label>Size</label>
                            <select  name = 'size' value={size} required onChange={e => setsize(e.target.value)}>
                                <option>XS</option>
                                <option>S</option>
                                <option>M</option>
                                <option>L</option>
                            </select>
                        </div>
                        <br></br>

                        <textarea rows={5}  cols={30} placeholder="Address"  value={delivery} required onChange={e => setdeli(e.target.value)} />
                        <br />
                    
                    </form>
                        <button onClick={place_order}> Place order</button>
                </div>

            </div>
        </div>
        :null
    );
}

export default Buy;