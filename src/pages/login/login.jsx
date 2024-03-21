import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserContext"

export default function Login () {
    let user = useContext(UserContext)

    async function handleLogin () {
        const provider = new GoogleAuthProvider()
        const auth = getAuth()

        let res = await signInWithPopup(auth, provider)
    }

    return (
        <button onClick={handleLogin}>Login with google</button>
    )
}