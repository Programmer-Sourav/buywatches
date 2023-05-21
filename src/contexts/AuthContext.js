import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export function AuthProvider ({children}){

    const [token, setToken] = useState(localStorage.getItem("encodedToken"))



    
    return(
        <AuthContext.Provider value={{token, setToken}}> {children} </AuthContext.Provider>
    )
}