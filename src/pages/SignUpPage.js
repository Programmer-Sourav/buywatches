import { useState } from "react";

export default function SignUpPage(){
    
    const [ email, setEmail] = useState("")
    const [ firstName, setFirstName ] = useState("")
    const [ lastName, setLastName ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ confirmPass, setConfirmPass ] = useState("")
    const [ showPassword, setShowPassword ] = useState(true)


    const registerBtn = async (email, firstName, lastName, showPassword, confirmPass) =>{
      
    }

    const toggleVisibility = () =>{
        setShowPassword(!showPassword)
    }

    return(
        <div>
            {
             <div>
               <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
               <input type="text" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}/>
               <input type="text" value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
               <input type="text" value={showPassword? password : text} onChange={(e)=>{setPassword(e.target.value)}}/>
               <input type="text" value={confirmPass} onChange={(e)=>{setConfirmPass(e.target.value)}}/>
               <button onClick={()=>toggleVisibility()}>Show</button>
               <button onClick={()=>{registerBtn(email, firstName, lastName, showPassword, confirmPass)}}>Register</button>
             </div>   
            }      
       </div>
    )


}