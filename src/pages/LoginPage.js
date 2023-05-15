
import FixedHeader from "../FixedHeader/FixedHeader"
import "../Stylesheets/login-container.css"
export default function LoginPage(){
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