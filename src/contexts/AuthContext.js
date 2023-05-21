import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider ({children}){

    const [token, setToken] = useState(localStorage.getItem("encodedToken"))
    const [isLoggedIn, setIsLoggedIn] = useState(false)



    
    return(
        <AuthContext.Provider value={{token, setToken, isLoggedIn, setIsLoggedIn}}> {children} </AuthContext.Provider>
    )
}