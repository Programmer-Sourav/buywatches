import { useParams } from "react-router"
import "../Stylesheets/productdescription.css"
import { useContext } from "react"
import { ProductsContext } from ".."

export default function ProductDescription(){
  const { pid } = useParams()

  const { productsState } = useContext(ProductsContext)
  console.log("***",productsState, pid)
  const copied = [...productsState]
  console.log("####", copied)


  const findProduct = findTheProduct(productsState, pid)

  //console.log("JSON ", JSON.parse(localStorage.getItem("item")));
 
  //if(JSON.parse(localStorage.getItem("item"))._id !== pid){
  localStorage.setItem("item", JSON.stringify(findProduct))
  //}

  function findTheProduct(productsState, pid){
    return productsState.find((product)=>product._id === pid)
  }

  const savedItem = JSON.parse(localStorage.getItem("item"))
  console.log(savedItem)

  return(
    <div className="product-description-layout"> 
    
    <img src={savedItem.img} alt="downloadedimage" className="image-style"/>

    <div className="details-div">
    <p className="item-name"> {savedItem.item}</p>
    <p className="collection"> {savedItem.collection} </p>
    <span className="item-price"> ₹{savedItem.discounted_price} </span>
  <span className="item-discount">₹{savedItem.price}</span>
    <span className="item-offer">{Math.round(100 - Number(savedItem.discounted_price)*100/Number(savedItem.price))}% Off </span>
    
    <hr/>
    <div className="item-details">
    <p>  <i className="fa fa-check" style={{color: "#3dd0a9", fontSize: "16px"}}></i> One Day Delivery </p>
    <p>  <i className="fa fa-check" style={{color: "#3dd0a9", fontSize: "16px"}}></i> Cash On Delivery Available </p>
    <p>  <i className="fa fa-check" style={{color: "#3dd0a9", fontSize: "16px"}}></i> Sellers warranty applicable </p>
    </div>
    <p style={{color: "#3dd0a9"}}> <strong>Description: </strong> </p>
    <div className="item-description">
    <p> <span><strong>Brand:</strong></span>  <span> {savedItem.brand} </span> </p>
    <p> <span> <strong>Seller:</strong> </span> <span>Apple store </span> </p>
    <p> <span> <strong>Color: </strong></span>  <span>Green </span> </p>
    </div>
    <button onClick={{}} className="button-style-one"> Add To Wishlist </button>
    <button onClick={{}} className="button-style-one"> Add To Bag </button>
    </div>
    </div>
  )
}