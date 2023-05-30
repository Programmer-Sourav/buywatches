import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider ({children}){

    const [token, setToken] = useState(localStorage.getItem("encodedToken"))
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [registeredEmail, setRegisteredEmail] = useState("")
    const [emailPassword, setEmailPassword ] = useState("") 

     const logoutHandler = () =>{
        setIsLoggedIn(false)
     }
    
    return(
        <AuthContext.Provider value={{token, setToken, isLoggedIn, setIsLoggedIn, logoutHandler, setRegisteredEmail, setEmailPassword, registeredEmail, emailPassword}}> {children} </AuthContext.Provider>
    )
}