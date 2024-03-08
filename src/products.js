import { collection, getDocs } from "firebase/firestore"
import db from "./helpers/firebase"

export default async function getProducts () {
    let col = collection(db, "merch")
    let products = await getDocs(col)

    let productData = products.docs.map(doc => {
        return {
            id: doc.id,
            name: doc.get("name"),
            price: doc.get("price"),
            photos: doc.get("photos")
        }
    })

    return productData
}


// export const Products=[

//     {
//         id:1,
//         productName: "Travis scott's satanic shirt",
//         price: "$100",
//         productImage: "https://imgs.search.brave.com/luh7FpVrnAdr_HwFScP0Zqx12UhaHHjtJKzof8V1dog/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NjFYSEVWMkp4Wkwu/anBn"
//     },

//     {
//         id:2,
//         productName: "Kanye west spunk trousers",
//         price: "$500",
//         productImage: "https://imgs.search.brave.com/dbLY4K5kjiWDz2siy-h_cir2nUBcF7LQc75R4c7mq9E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ4Mzg5MTMwL3Iv/aWwvYmQ3MGUyLzU2/OTQzMDEyOTUvaWxf/NjAweDYwMC41Njk0/MzAxMjk1Xzc1YWIu/anBn"
//     },

//     {
//         id:3,
//         productName: "Megan's jack8",
//         price: "$600",
//         productImage: "https://imgs.search.brave.com/DWRj_ca_hnFXLoffmBQsXIaNY6r13S8fZ_PUNSNvRCQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4x/MS5iaWdjb21tZXJj/ZS5jb20vcy14a3Uy/OTN6aWY1L2ltYWdl/cy9zdGVuY2lsLzMz/N3gzMzcvcHJvZHVj/dHMvNTE3Ny8xMTI5/My9NZWdhbl9Gb3hf/WWVsbG93X0xlYXRo/ZXJfSmFja2V0XzFf/XzEyNDk2LjE2Nzkz/OTkwODMuanBnP2M9/Mg"
//     },

//     {
//         id:4,
//         productName: "ur momma's.. im sorry what?",
//         price: "$500",
//         productImage: "https://imgs.search.brave.com/onklrXlmnUfbFUf947eU9m3VrRNkJJuU7pEqTt3QIeM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly85OWRl/c2lnbnMtc3RhcnQt/YXR0YWNobWVudHMu/aW1naXgubmV0L2Fs/Y2hlbXktcGljdHVy/ZXMvMjAxNi8wMS8y/Ni8yMS81NS8yMC8w/ZTM5MDI1My02ZjI3/LTQ1NjQtYjBmZi05/NWU3NTZkNmYzYTQv/MTkyMTA3X2ppbmRp/ZXRmXzFfMDMucG5n/P2F1dG89Zm9ybWF0/JmNoPVdpZHRoLERQ/UiZjcm9wPWZhbHNl/JmZtPXBuZyZ3PTU1/OCZoPTY2OQ"
//     },

//     {
//         id:5,
//         productName: "Seedha sadha pant",
//         price: "$100",
//         productImage: "https://imgs.search.brave.com/ZkV1XNx4BLlLdyeaZCGD0_HZdPL4dY_b5GKvO_4pGtM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9iZXlv/bmRjbG90aGluZy5j/b20vY2RuL3Nob3Av/cHJvZHVjdHMvTWFr/ZXJzX1BhbnRfUnVz/dGljR3JlZW5fRnJv/bnRfV0VCXzRiYWMy/MzNlLTVjYWQtNDFl/Mi04YTFhLTI1MzBj/NjEyNjdmMF81NDB4/LmpwZz92PTE3MDQy/MjA5MzM"
//     }
// ]