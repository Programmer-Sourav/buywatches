import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../Stylesheets/login-container.css"

export default function SignUpPage(){
    
    const [ email, setEmail] = useState("")
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPass, setConfirmPass ] = useState("")
    const [ showPassword, setShowPassword ] = useState(true)
    const { token, setToken, setIsLoggedIn, registeredEmail, setRegisteredEmail, emailPassword, setEmailPassword } = useContext(AuthContext)
    const navigate = useNavigate()


    const registerBtn = async (email, firstName, lastName, password, confirmPass) =>{
            try{
                const data = {
                    email: email,
                    password: password, 
                    lastName: lastName, 
                    password: password,
                    confirmPass: confirmPass
                }
        setRegisteredEmail(email)
        setEmailPassword(password)
        
        if(email.trim()!==""|| firstName.trim()!=="" || lastName.trim()!=="" || password.trim()!==""|| confirmPass.trim()!==""){        
        if(password === confirmPass){
                const res = await fetch("api/auth/signup",{
                    method: 'POST',
                    body: JSON.stringify(data)
                })
    
                const { encodedToken } = await res.json();
    
                setToken(localStorage.setItem("encodedToken", encodedToken))
                console.log(441, localStorage.getItem("encodedToken"))
                setIsLoggedIn(true)
              
                const result = navigate("/profile");
               
              
                
    
                localStorage.setItem("encodedToken", encodedToken)
                console.log(441, localStorage.getItem("encodedToken"))
                if(localStorage.getItem("encodedToken")!== "undefined"){
                    
                }
            }
         else{
            toast.error("Password doesn't match!")
         }   
    
            }
            else{
            toast.error("Please enter valid inputs!")
            }
        }
            catch(e){
            console.error(e)
            }
        
      
    }



    const toggleVisibility = () =>{
        setShowPassword(!showPassword)
    }

    return(
        <div>
            {
             <div>
               <div>
               <p> <label>Enter Your Email </label></p> 
               <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
               </div>
               <div>
               <p> <label>Enter Your Firstname </label></p> 
               <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
               </div>
               <div>
               <p> <label>Enter Your Lastname </label></p> 
               <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
               </div>
               <div>
               <p > <label>Enter Your Password </label></p>
               <input type={showPassword? "password" : "text"} onChange={(e)=>{setPassword(e.target.value)}}/>
               <button onClick={()=>toggleVisibility()} style={{color: "white", background: "black"}}>Show</button>
               
               </div>
               <div>
               <p> <label>Confirm Password</label></p>
               <input type="text" value={confirmPass} onChange={(e)=>{setConfirmPass(e.target.value)}}/>
               </div>
               <button onClick={()=>{registerBtn(email, firstName, lastName, password, confirmPass)}}>Register</button>
             </div>   
            }      
       </div>
    )


}