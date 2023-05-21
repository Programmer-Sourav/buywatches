
import { useContext, useState } from "react"
import FixedHeader from "../FixedHeader/FixedHeader"
import "../Stylesheets/login-container.css"
import { AuthContext } from "../contexts/AuthContext"
import { useLocation, useNavigate } from "react-router";


export default function LoginPage(){
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const { token, setToken } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

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
            setToken(localStorage.setItem("encodedToken", encodedToken))
            console.log(441, localStorage.getItem("encodedToken"))
           
            const result = navigate(location?.state?.from?.pathname);
          
            if(result===undefined){
                //console.log(444, undefined)
                //directly login from singin page and not redirected from other pages
                navigate("/fakewelcome")
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
            <input type="text" className="login-info"/>
            </div>
            <div>
            <p> <label>Enter Your Password </label></p>
            <input type="password" className="login-info"/>
            </div>
            <p> Forgot Password? </p>
            <button onClick={{}} className="sign-button">Sign In</button>
            <p> Don't have an account? Sign up</p>
       </div>
       </div>
       </div>
    )
}