import React from "react"
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import Navigation from "./components/Navigation"

const Home=()=>{
  const [Roomcode,setRoomcode]=useState("")
const Navigate=useNavigate();

const submitCode=(e)=>{
    e.preventDefault()
    Navigate(`/room/ ${Roomcode}`)
}
    return(
        <>
         <Navigation/>
         
        <div>
       
<form onSubmit={submitCode}>
    <label>Frimp vid-Chat</label>
    <input type="text" required placeolder="" value={Roomcode} onChange={(e)=>setRoomcode(e.target.value)}/>
    <button>Enter Room</button>
</form>
        </div>
        </>
    )
}

export default Home