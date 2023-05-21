
import { useState } from "react"
import FixedHeader from "../FixedHeader/FixedHeader"
import "../Stylesheets/login-container.css"
export default function LoginPage(){
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const signInBtn = async (email, password) =>{
        try{
            const creds = {
                email: email,
                password: password

            }

            const res = await fetch("api/auth/login",{
                method: 'POST',
                body: JSON.stringify(creds)
            })

            const { encodedToken } = await res.json();
            localStorage.setItem("encodedToken", encodedToken)
            //console.log(441, localStorage.getItem("encodedToken"))
            if(localStorage.getItem("encodedToken")!== "undefined"){
                
            }
        }
        catch(e){
        console.error(e)
        }

     }
    return(
        <div>
            <FixedHeader/>
            <div className="parent-container">
            <div className="login-container-class">
            <div>
            <p> <label>Enter Your Email </label></p>
            <input type="text" value = {email} onChange={(event)=>{setEmail(event.target.value)}} className="login-info"/>
            </div>
            <div>
            <p> <label>Enter Your Password </label></p>
            <input type="password" value = {password} onChange={(event)=>{setPassword(event.target.value)}} className="login-info"/>
            </div>
            <p> Forgot Password? </p>
            <button onClick={()=>{signInBtn(email, password)}} className="sign-button">Sign In</button>
            <p> Don't have an account? Sign up</p>
       </div>
       </div>
       </div>
    )
}