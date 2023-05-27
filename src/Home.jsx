import toast, { Toaster } from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import Categories from "./Components/Categories";





export const AuthToken =() =>{
   

    const getData = async() =>{

        try{
            const creds = {
                email: "imsourav123@gmail.com",
                password: "snath123"

            }

            const res = await fetch("api/auth/login",{
                method: 'POST',
                body: JSON.stringify(creds)
            })

            //const { encodedToken } = await res.json();
            // const response = await res.json();
            // console.log(response)

            const { encodedToken } = await res.json();
            localStorage.setItem("encodedToken", encodedToken)
            console.log(localStorage.getItem("encodedToken"))
        }
        catch(e){
        console.error(e)
        } 

    }
    const getFire = () => toast.success("Successfully Logged In!");
   

  
  
    

return(
    <div>
    <button onClick={getData}>Hello!!!!</button>
    <button onClick={getFire}>Fire here</button>
    <Categories/>
    </div>
)
}