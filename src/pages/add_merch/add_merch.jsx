import React, { useState } from "react";
import "./add_merch.css";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../../helpers/firebase";
import "firebase/firestore";
import {getDownloadURL, uploadBytes } from "firebase/storage";
import {ref} from "firebase/storage";
import { useNavigate } from "react-router-dom";

function Merch()
{
    let navigate = useNavigate()
    const [name, setName] = useState('');
    const [club, setClub] = useState('');
    const [price, setPrice] = useState('');
    const [image,setimage]= useState(null);

    async function submission(e)
    {
        e.preventDefault();
        const imgref=ref(storage, `images/${image.name}.jpg`);

        let snapshop = await uploadBytes(imgref,image)
        let imageUrl = await getDownloadURL(snapshop.ref)

        const doc_ref= await addDoc(collection(db,"merch"),{
            club: club,
            name: name,
            price: price,
            photo: [imageUrl]
        });

        alert("your product has been added to database");

        navigate("/")
    }

    return(
        <div>

            <h1>Sell your stuff!!</h1>
            
            <form className="form">
                <input className="inp" type="text" placeholder="Product Name" value={name} required onChange={e => setName(e.target.value)}></input>
                <input className="inp" type="text" placeholder="Belonging club" value={club} required onChange={e => setClub(e.target.value)}></input>
                <input className="inp" type="file" accept="image/png, image/jpeg" placeholder="Upload Photo" onChange={e => setimage(e.target.files[0]) } />
                <input className="inp" type="number" placeholder="Price" value={price} required onChange={e => setPrice(e.target.value)}></input>
                <button type="submit" onClick={submission}>Submit</button>
            </form>

        </div>
    );
}


export default Merch;