import "../Stylesheets/footer.css";


import 'font-awesome/css/font-awesome.min.css';
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"
import { ProductsContext } from "../contexts/ProductsContext";
import { ACTION_TYPES } from "../reducer/ProductsReducer";


export default function Footer(){

  const [searchInput, setSearchInput ] = useState("")
  const { dispatch } = useContext(ProductsContext)
  const navigate = useNavigate()

  const searchItem = (searchValue) =>{
   if(searchValue.length>0){
     dispatch({type: ACTION_TYPES.SEARCH, payload: searchValue})
     navigate("/store")

   }
  }

  const onChangeHandler = (e) =>{
    setSearchInput(e.target.value)
    

    if(e.target.value.length>0){
      dispatch({type: ACTION_TYPES.SEARCH, payload: e.target.value})
      navigate("/store")
 
    }

  }

  return(
    <div> 
    <div className="navigation-footer"> 
    
    <div className="icons">
    <div className = "footer-icons">
    <Link to ="/store"><i className="fa fa-product-hunt" title="Cart" style={{color: "white", fontSize: "20px"}}></i></Link>
    </div> 
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