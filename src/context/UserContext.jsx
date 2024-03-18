import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { db } from "../helpers/firebase"
import { doc, getDoc, setDoc } from "firebase/firestore"

export let UserContext = createContext(null)

export function UserContextProvider ({ children }) {
    let [ user, setUser ] = useState(null)

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

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}