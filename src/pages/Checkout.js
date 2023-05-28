import { useContext, useEffect } from "react"
import { ProductsContext } from "../contexts/ProductsContext"
import { CartContext } from "../contexts/CartContext"


import "../Stylesheets/checkout.css"
import { ACTION_TYPES } from "../reducer/ProductsReducer"
import { useNavigate } from "react-router-dom"
import { toast } from "react-hot-toast"
import { AuthContext } from "../contexts/AuthContext"
import { deleteItemFromCart } from "../Utils/NetworkApis"
import { ACTION_TYPES_FOR_CART } from "../reducer/CartReducer"

export default function Checkout(cartItem){


    const { addressState, priceDetails, dispatch, address } = useContext(ProductsContext)
    
    const { cart, cartDispatch } = useContext(CartContext)

    const { token } = useContext(AuthContext)

    const navigate = useNavigate()
   
    const goToNextPage = () =>{
      if(addressState.length===0){
         toast.error("Please select an address to continue")
      }
      else{
         navigate("/success")
         cartDispatch({type: ACTION_TYPES_FOR_CART.CLEAR_CART, payload: [] })
      }
    }


    return(
        <div>
     {
        <div>
        <h2 className="c-title"> Checkout </h2>
        <h4 className="c-title">Order Details ({cart.length} items)</h4>
        <p>--------------------------------------------------------</p>
        <p className="c-title">{cart.map((cartItem)=>(
          cartItem.quantity>0? <p>Item: {cartItem.item} ----- Quantity: {cartItem.quantity}</p> : ""
        ))}</p>
        <p className="c-title">----------------------------------------------------------</p>
        <h4 className="c-title">Price Details</h4>
        <p className="c-title">-----------------------------------------------------------</p>
        <p className="c-title">Price: Rs. {priceDetails.price}</p>
        <p className="c-title">Discount: Rs. {priceDetails.price}</p>
        <p className="c-title"><strong>Total Amount: Rs. {priceDetails.discounted_price}</strong></p>
        <p className="c-title">---------------------------------------------------------------</p>
        <h4 className="c-title-deliver">Deliver To</h4>
       
        {address.map((item)=>(
                    <div key = {address.id} >
                    <li className="radio-style">
                     <input type="radio" value={address.id} name= "address" onChange={()=>{dispatch({type: ACTION_TYPES.ADD_ADDRESS, payload: address})}}></input>
                    <span>{item.fullname}</span>
                    {item.number}, {item.cityName},  {item.addressDetails}
                    </li>
                    </div>
                ))} <br/>

        <button onClick={()=>goToNextPage()} className="place-order-button" >Place Order!</button>
       </div>
     }

        </div>
    )
}