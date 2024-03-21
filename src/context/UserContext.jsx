import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { db } from "../helpers/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"


export let UserContext = createContext(null)

export function UserContextProvider ({ children }) {
    let uid = localStorage.getItem("uid")
    let initialUser
    if (uid == null) { initialUser = null }
    else { initialUser = {uid} }


    let [ user, setUser ] = useState(initialUser)

    useEffect(() => {
        const auth = getAuth()
        
        onAuthStateChanged(auth, async u => {
            if (u == null) {
                setUser(null)
                return
            }
            
            let userDocref = doc(db, "users", u.uid)
            let userDoc = await getDoc(userDocref)

            if (!userDoc.exists()) {
                await setDoc(userDocref, {
                    name: u.displayName,
                    email: u.email
                })
            }
            setUser(u)
        })
    }, [])

    useEffect(() => {
        if (user == null) {
            localStorage.setItem("uid", null)
            return
        }
        localStorage.setItem("uid", user.uid)
    }, [ user ])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}