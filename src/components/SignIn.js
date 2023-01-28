import React from "react"
import { auth } from "../firebase"
import GoogleButton from "react-google-button"
import {GoogleAuthProvider,signInWithRedirect} from "firebase/auth"

const SignIn=()=>{
    const googleSignIn=()=>{
        const provider=new GoogleAuthProvider()
        signInWithRedirect(auth,provider)
    }
    return(
        <div>
           <GoogleButton onClick={googleSignIn}/>
        </div>
    )
}

export default SignIn