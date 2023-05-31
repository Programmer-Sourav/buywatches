
import { useContext, useState } from "react"
import FixedHeader from "../FixedHeader/FixedHeader"
import "../Stylesheets/login-container.css"
import { AuthContext } from "../contexts/AuthContext"
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-hot-toast";


export default function LoginPage(){
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const { token, setToken, isLoggedIn, setIsLoggedIn, setRegisteredEmail, setEmailPassword } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();


    const signInBtn = async (email, password) =>{
    
        setRegisteredEmail(email)
        setEmailPassword(password)
        try{
            const creds = {
                email: email,
                password: password

            }
            console.log(6666, JSON.stringify(creds))
            const res = await fetch("api/auth/login",{
                method: 'POST',
                body: JSON.stringify(creds)
            })
            const response = await res.json();
            const { encodedToken } = response;
            localStorage.setItem("encodedToken", encodedToken)

            if(localStorage.getItem("encodedToken")){
                setIsLoggedIn(true)
                setToken(localStorage.getItem("encodedToken"))
                console.log("IsLoggedIn", isLoggedIn)
                const result = navigate(location?.state?.from?.pathname);
                
            }
            //navigate("/fakewelcome")
          
            

            // localStorage.setItem("encodedToken", encodedToken)
            // //console.log(441, localStorage.getItem("encodedToken"))
            // if(localStorage.getItem("encodedToken")!== "undefined"){
                
            // }

        }
        catch(e){
        console.error(e)
        }
    }


        const guestSignInBtn = async (email, password) =>{
            setRegisteredEmail(email)
            setEmailPassword(password)
            try{
                const creds = {
                    email: email,
                    password: password
    
                }
                console.log(7777, JSON.stringify(creds))
                const res = await fetch("api/auth/login",{
                    method: 'POST',
                    body: JSON.stringify(creds)
                })
    
                const { encodedToken } = await res.json();
                localStorage.setItem("encodedToken", encodedToken)

               
                if(localStorage.getItem("encodedToken")){
                    setIsLoggedIn(true)
                    setToken(localStorage.getItem("encodedToken"))
                    console.log("IsLoggedIn", isLoggedIn)
                    const result = navigate(location?.state?.from?.pathname);
                    
                }
                
    
            }
            catch(e){
            console.error(e)
            }
    

     }
    return(
        <div>
            <div className="parent-container">
            <div className="login-container-class">
            <div>
            <p> <label>Enter Your Email </label></p>
            <input type="text" className="login-info" onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div>
            <p> <label>Enter Your Password </label></p>
            <input type="password" className="login-info"  onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <p> Forgot Password? </p>
            <button onClick={()=>{signInBtn(email, password)}} className="sign-button">Sign In</button>
            <button onClick={()=>{guestSignInBtn("abc@gmail.com", "snath")}} className="sign-button"> Test  Sign In</button>
            <p> Don't have an account? <a href="/signup">Sign up</a></p>
       </div>
       </div>
       </div>
    )
}