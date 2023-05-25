import { useContext } from "react"
import "../Stylesheets/productcard.css"

import { CartContext } from "../contexts/CartContext"
import { AuthContext } from "../contexts/AuthContext"
import { addToCart, addToWishlist } from "../Utils/NetworkApis";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"
import { WishListContext } from "../contexts/WishListContext"
import { ACTION_TYPES_FOR_WISHLIST } from "../reducer/WishlistReducer"


export default function ProductCard({data}){
  const {_id, tag, brand, category, color, discounted_price, id, img, item, price, title} = data;
  const {cartDispatch} = useContext(CartContext)
  const { wishListState, wishListDispatcher } = useContext(WishListContext)
  const { token } = useContext(AuthContext)
  const pid = _id;
  const navigate = useNavigate();
  console.log("PID", pid)
  console.log(4545, token)

    const discount_percentage = Math.round((price-discounted_price/100))
    //console.log(discount_percentage)
    console.log(discounted_price)

  
    return(
    
     <div className="product-card-layout" >
     <div className="product-parent" onClick={()=>{navigate(`/description/${pid}`)}}>
      <img src={img} alt="productimg" className="image-style" />
      <p className="tag"> {tag}</p>
      <p className="item-tags"> {title} </p>
      <p className="item-name" > <strong> {item} </strong></p>
      <span className="item-price"> ₹{price}</span>
       <span className="item-discount"> ₹{discounted_price}</span>
       <span className="discount">{discount_percentage}</span>
       <div>
       {/* cartDispatch({type: "ADD_TO_CART", payload: data }) */}
      </div>
      </div>
      {/* <button onClick={()=>{addToWishlist(data, token, wishListDispatcher)}}> Add to wishlist</button> */}
      <span id='clickableIcon' onClick={()=>{addToWishlist(data, token, wishListDispatcher)}}><i class="fa fa-heart"></i></span>
     
      <button onClick={()=>{addToCart(data, token, cartDispatch)}} className="button-bg-two"> Add To Cart </button>
      </div>
      
    )
  }