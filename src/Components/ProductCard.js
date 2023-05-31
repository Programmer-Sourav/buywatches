import { useContext } from "react"
import "../Stylesheets/productcard.css"

import { CartContext } from "../contexts/CartContext"
import { AuthContext } from "../contexts/AuthContext"
import { addToCart, addToWishlist, removeFromWishList } from "../Utils/NetworkApis";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom"
import { WishListContext } from "../contexts/WishListContext"



export default function ProductCard({data}){
  const {_id, tag, brand, category, color, discounted_price, id, img, item, price, title} = data;
  const {cart,cartDispatch} = useContext(CartContext)
  const { wishListState, wishListDispatcher } = useContext(WishListContext)
  const { token, isLoggedIn } = useContext(AuthContext)
  const pid = _id;
  const navigate = useNavigate();
  

    const discount_percentage = (Math.round(100 - Number(discounted_price)*100/Number(price)))
  

    function checkIfTheItemIsInWishlist(item_id){
      const itemFound = wishListState.find((item)=>item._id === item_id)
      return itemFound
    }

    function checkIfITemIsInTheCart(data){
       const itemFound = cart.find((item)=>item._id === data._id)
      return itemFound
    }

    const goToCart = () =>{
      navigate("/cart")
    }

   const checkLoginAndAddToCart = () =>{
    if(isLoggedIn){
    addToCart(data, token, cartDispatch)
    }
    else{
      toast.error("Please Login First")
    }
   }

   const checkLoginAndAddToWishlist = () =>{
    if(isLoggedIn){
      addToWishlist(data, token, wishListDispatcher)
    }
    else{
      toast.error("Please Login First")
    }
   }

  
    return(
    
     <div className="product-card-layout" key={id}>
      {
       isLoggedIn &&  checkIfTheItemIsInWishlist(_id) ?
      <span className='clickableIcon' onClick={()=>{removeFromWishList(_id, token, wishListDispatcher)}}><i class="fa fa-heart" style={{color: "red"}}></i></span> :
      <span className='clickableIcon' onClick={()=>checkLoginAndAddToWishlist()}><i class="fa fa-heart"></i></span>
      }
     <div className="product-parent" onClick={()=>{navigate(`/description/${pid}`)}}>
      <img src={img} alt="productimg" className="image-style" />
      
      <p className="item-tags"> {title} </p>
      <p className="item-name" > <strong> {item} </strong></p>
      <span className="item-price"> ₹{discounted_price}</span>
       <span className="item-discount"> ₹{price}</span>
       <span className="discount">{discount_percentage} % Off</span>
       <div>
      </div>
      </div>
      
     { isLoggedIn && checkIfITemIsInTheCart(data) ?
      <button onClick={goToCart} className="button-bg-two">Go to Cart</button> :
      <button onClick={()=>checkLoginAndAddToCart()} className="button-bg-two">Add To Cart</button>} 
      </div>
      
    )
  }