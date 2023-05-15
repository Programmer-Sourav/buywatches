import "../Stylesheets/productcard-wishlist.css"

export default function ProductCardForWishlist(){
    return(
        <div className="product-wishlist-layout">
        <img src="https://img1.gadgetsnow.com/gd/images/products/additional/large/G392624_View_2/accessories/smart-watches/apple-watch-ultra-gps-cellular-49-mm-retina-oled-display-green-alpine-loop-medium-smart-watch.jpg" alt="downloadedimage" className="image-wishlist-style"/>
        <p className="item-name-wishlist"> <strong> Watch Ultra - by Apple </strong></p>
        <span className="item-price"> ₹79000 </span>
       <span className="item-discount"> ₹89900</span>
       <span className="discount"><strong> (10% Off) </strong></span>
       <div>
      <button onClick={{}} className="button-bg-two"> Move to Cart </button>
      </div>
       </div>
    )
}