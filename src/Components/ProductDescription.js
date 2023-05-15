import "../Stylesheets/productdescription.css"

export default function ProductDescription(){
  return(
    <div className="product-description-layout"> 
    <img src="https://img1.gadgetsnow.com/gd/images/products/additional/large/G392624_View_2/accessories/smart-watches/apple-watch-ultra-gps-cellular-49-mm-retina-oled-display-green-alpine-loop-medium-smart-watch.jpg" alt="downloadedimage" className="image-style"/>

    <div className="details-div">
    <p className="item-name"> Watch Ultra - by Apple </p>
    <p className="collection"> Luxury Collection </p>
    <span className="item-price"> ₹89000 </span>
    <span className="item-discount">₹79000</span>
    <span className="item-offer">10% Off </span>
    
    <hr/>
    <div className="item-details">
    <p>  <i className="fa fa-check" style={{color: "#3dd0a9", fontSize: "16px"}}></i> One Day Delivery </p>
    <p>  <i className="fa fa-check" style={{color: "#3dd0a9", fontSize: "16px"}}></i> Cash On Delivery Available </p>
    <p>  <i className="fa fa-check" style={{color: "#3dd0a9", fontSize: "16px"}}></i> Sellers warranty applicable </p>
    </div>
    <p style={{color: "#3dd0a9"}}> <strong>Description: </strong> </p>
    <div className="item-description">
    <p> <span><strong>Brand:</strong></span>  <span> Apple </span> </p>
    <p> <span> <strong>Seller:</strong> </span> <span>Apple store </span> </p>
    <p> <span> <strong>Color: </strong></span>  <span>Green </span> </p>
    </div>
    <button onClick={{}} className="button-style-one"> Add To Wishlist </button>
    <button onClick={{}} className="button-style-one"> Add To Bag </button>
    </div>
    </div>
  )
}