import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"
import { toast } from "react-hot-toast";


export default function ProfileMain(){

    const { isLoggedIn, token, logoutHandler, registeredEmail, emailPassword } = useContext(AuthContext) 
    const navigate = useNavigate();
    
    function goToAddress(){
     
    }

    function getMeOut(){
        logoutHandler(false)
        toast.success("You are succesfully signed out")
        navigate("/store")
    }

    return(
        <div className="main-container"> 
            <h1>My Profile Details</h1>
            <p>Email: {registeredEmail}</p>
            <p>Password: {emailPassword}</p>
            <h1 onClick={goToAddress}>  <Link to="/address">Go to Address Management</Link></h1>

            <h4 onClick={getMeOut} style={{color: "red"}}>  <Link to="/address">Logout</Link></h4>
        </div>
    )
}