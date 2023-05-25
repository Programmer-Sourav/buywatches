import "../Stylesheets/header.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link } from "react-router-dom"

export default function FixedHeader(){
  return(
    <div> 
    <div className="navigation-header"> 
    <h2 className="name-div"> BuyYourTime </h2>
    <input type="search" className = "search-container"/>
    <div className="icons">
    <div className = "cart">
    <Link to ="/cart"><i className="fa fa-shopping-cart" title="Cart" style={{color: "white", fontSize: "20px"}}></i></Link>
    
    </div>
    <div className = "wishlist">
    <Link to ="/wishlist"><i className="fa fa-heart" style={{color: "white", fontSize: "20px"}}></i></Link>
   
    </div>
    <div className = "profile">
    <Link to ="/profile"><i className="fa fa-user" style={{color: "white", fontSize: "20px"}}></i></Link>
    </div>
    </div>
    </div>
    </div>  
  )
}