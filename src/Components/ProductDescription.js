import { useParams } from "react-router"
import "../Stylesheets/productdescription.css"
import { useContext, useEffect, useState } from "react"
import { AuthContext, ProductsContext } from ".."
import { CartContext } from ".."
import { WishListContext } from ".."
import { addToCart, addToWishlist } from "../Utils/NetworkApis"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"


export default function ProductDescription(){
  const { pid } = useParams()

  const {cart,cartDispatch} = useContext(CartContext)
  const { wishListState, wishListDispatcher } = useContext(WishListContext)
  const { productsState } = useContext(ProductsContext)
  const { token, isLoggedIn } = useContext(AuthContext)
  const [ item, setItem ] = useState([])

  
  const navigate = useNavigate()
 
  const copied = [...productsState]
  
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

  const goToWishlist = () =>{
    navigate("/wishlist")
  }

  const findProduct = findTheProduct(productsState, pid)

 
  //if(JSON.parse(localStorage.getItem("item"))._id !== pid){
  localStorage.setItem("item", JSON.stringify(findProduct))
  //}

  function findTheProduct(productsState, pid){
    return productsState.find((product)=>product._id === pid)
  }
  useEffect(()=>{
  const savedItem = (JSON.parse(localStorage.getItem("item")))
  setItem(savedItem)}, [])

  const checkLoginAndAddToCart = () =>{
    if(isLoggedIn){
      addToCart(findProduct, token, cartDispatch)
    }
    else{
      toast.error("Please Login First")
    }
   }

   const checkLoginAndAddToWishlist = () =>{
    if(isLoggedIn){
      addToWishlist(findProduct, token, wishListDispatcher)
    }
    else{
      toast.error("Please Login First")
    }
   }

  return(
    <div className="product-description-layout"> 
    
    <img src={findProduct.img} alt="downloadedimage" className="image-style"/>

    <div className="details-div">
    <p className="item-name"> {findProduct.item}</p>
    <p className="collection"> {findProduct.collection} </p>
    <span className="item-price"> ₹{findProduct.discounted_price} </span>
  <span className="item-discount">₹{findProduct.price}</span>
    <span className="item-offer">{Math.round(100 - Number(findProduct.discounted_price)*100/Number(findProduct.price))}% Off </span>
    
    <hr/>
    <div className="item-details">
    <p>  <i className="fa fa-check" style={{color: "#3dd0a9", fontSize: "16px"}}></i> One Day Delivery </p>
    <p>  <i className="fa fa-check" style={{color: "#3dd0a9", fontSize: "16px"}}></i> Cash On Delivery Available </p>
    <p>  <i className="fa fa-check" style={{color: "#3dd0a9", fontSize: "16px"}}></i> Sellers warranty applicable </p>
    </div>
    <p style={{color: "#3dd0a9"}}> <strong>Description: </strong> </p>
    <div className="item-description">
    <p> <span><strong>Brand:</strong></span>  <span> {findProduct.brand} </span> </p>
    <p> <span> <strong>Seller:</strong> </span> <span>Apple store </span> </p>
    <p> <span> <strong>Color: </strong></span>  <span>Green </span> </p>
    </div>
    {isLoggedIn && checkIfTheItemIsInWishlist(findProduct._id) ? 
    <button onClick={goToWishlist} className="button-style-one">Go to Wishlist</button> :
    <button onClick={()=>checkLoginAndAddToWishlist()} className="button-style-one"> Add To Wishlist </button>}

    {isLoggedIn && checkIfITemIsInTheCart(findProduct) ?
      <button onClick={goToCart} className="button-style-one">Go to Cart</button> :
      <button onClick={()=>checkLoginAndAddToCart()} className="button-style-one">Add To Cart</button>} 
    </div>
    </div>
  )
}