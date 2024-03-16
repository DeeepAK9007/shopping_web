import React, { useState } from "react";
import "./add_merch.css";
import { collection, addDoc } from "firebase/firestore";
import db from "../../helpers/firebase";
import "firebase/firestore";
import {getDownloadURL, uploadBytes } from "firebase/storage";
import {ref} from "firebase/storage";
import {storage} from "../../helpers/firebase";

function Merch()
{

    const [name, setName] = useState('');
    const [club, setClub] = useState('');
    const [price, setPrice] = useState('');
    const [image,setimage]= useState(null);

    function data(e)
    {
        e.preventDefault();
        setName(e.target.value);
    }

    function data1(e)
    {
        e.preventDefault();
        setClub(e.target.value);
    }
    
    function data2(e)
    {
        e.preventDefault();
        setPrice(e.target.value);
    }

    console.log(name);
    console.log(club);
    console.log(price);

    let a="";

    async function submission(e)
    {
        const imgref=ref(storage,'images/${imageUpload.name}.jpg');

        uploadBytes(imgref,image).then((snapshot) => {return getDownloadURL(snapshot.ref);}).then(downloadurl => {console.log('DOWNLOAD URL:',downloadurl);a=downloadurl;})

        e.preventDefault();
        const doc_ref= await addDoc(collection(db,"merch"),{
            club: club,
            name: name,
            price: price,
            photo: a
        });

        alert("your product has been added to database");

        document.getElementById("form").reset();
    }

    return(
        <div>

            <h1>Sell your stuff!!</h1>
            
            <form className="form">
                <input className="inp" name="p_name" type="text" placeholder="Product Name" value={name} required onChange={data}></input>
                <input className="inp" name="club" type="text" placeholder="Belonging club" value={club} required onChange={data1}></input>
                <input className="inp" name="image" type="file" accept="image/png, image/jpeg" placeholder="Upload Photo" onChange={(event)=>{setimage(event.target.files[0]);}} />
                <input className="inp" name="price" type="number" placeholder="Price" value={price} required onChange={data2}></input>
                <button type="submit" onClick={submission}>Submit</button>
            </form>

        </div>
    );
}


export default Merch;