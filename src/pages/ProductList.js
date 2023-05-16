import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../Components/ProductCard";
import "../Stylesheets/productslist.css"

export default function ProductList(){

    const { productsList } = useContext(ProductsContext)
    
    return(
        <div className="list-layout"> 
            {
            productsList.map((product)=>(
                <ProductCard {...product}/>

            ))}
        </div>
    )
}