import React from "react"
import { auth } from "../firebase"

const SignOut=()=>{
    const signOut=()=>{
        signOut(auth)
    }
    return(
        <div>
            <button onClick={()=>auth.signOut()}>SignOut</button>
        </div>
    )
}

export default SignOut