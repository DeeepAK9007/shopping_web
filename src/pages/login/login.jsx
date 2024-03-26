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
        <div class="login-section">
            <div class="content">
                <h1>Click below to Login or Sign up!</h1>
                <button className="loginbutton" onClick={handleLogin}><img src="/google.png" />Login with google</button>
            </div>
        </div>
    )
}