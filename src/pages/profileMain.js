import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"


export default function ProfileMain(){

    const { isLoggedIn, token, logoutHandler } = useContext(AuthContext) 
    const navigate = useNavigate();
    
    function goToAddress(){
     
    }

    function getMeOut(){
        logoutHandler(false)
        navigate("/store")
    }

    return(
        <div className="main-container"> 
            <h1>My Profile Details</h1>
            <p>Email: abc@gmail.com</p>
            <p>Password: snath</p>
            <h1 onClick={goToAddress}>  <Link to="/address">Go to Address Management</Link></h1>

            <h4 onClick={getMeOut} style={{color: "red"}}>  <Link to="/address">Logout</Link></h4>
        </div>
    )
}