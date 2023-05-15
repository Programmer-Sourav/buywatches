import "../Stylesheets/header.css";
import 'font-awesome/css/font-awesome.min.css';

export default function FixedHeader(){
  return(
    <div> 
    <div className="navigation-header"> 
    <h2 className="name-div"> BuyYourTime </h2>
    <input type="search" className = "search-container"/>
    <div className="icons">
    <div className = "cart">
    <i className="fa fa-shopping-cart" title="Cart" style={{color: "white", fontSize: "20px"}}></i>
    
    </div>
    <div className = "wishlist">
    <i className="fa fa-heart" style={{color: "white", fontSize: "20px"}}></i>
   
    </div>
    <div className = "profile">
    <i className="fa fa-user" style={{color: "white", fontSize: "20px"}}></i>
    </div>
    </div>
    </div>
    </div>  
  )
}