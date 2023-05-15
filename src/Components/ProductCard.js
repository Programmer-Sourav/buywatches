import "../Stylesheets/productcard.css"

export default function ProductCard(){
    return(
     <div className="product-card-layout">
      <img src="https://img1.gadgetsnow.com/gd/images/products/additional/large/G392624_View_2/accessories/smart-watches/apple-watch-ultra-gps-cellular-49-mm-retina-oled-display-green-alpine-loop-medium-smart-watch.jpg" alt="productimg" className="image-style"/>
      <p className="tag"> Trending </p>
      <p className="item-tags"> Luxury collection</p>
      <p className="item-name"> <strong> Watch Ultra - by Apple </strong></p>
      <span className="item-price"> ₹79000 </span>
       <span className="item-discount"> ₹89900</span>
       <span className="discount">10% Off</span>
       <div>
      <button onClick={{}} className="button-bg-two"> Add To Cart </button>
      </div>
      </div>
    )
  }