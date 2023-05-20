import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../Components/ProductCard";
import ProductFilter from "../pages/ProductFilter"
import "../Stylesheets/productslist.css"

export default function ProductList(){

    const { productsList, sortByPrice, range, byAvailability, byRatings, byGender, byCategory, byUse } = useContext(ProductsContext)
    
   
    const updatedProducts = () =>{
       
        let sortedProducts = productsList
       // console.log("SORTED ",sortedProducts)

        if(sortByPrice){
           
            sortedProducts = sortedProducts.sort((p1, p2)=> sortByPrice==="lTh"? p1.price - p2.price : productsList)
            sortedProducts = sortedProducts.sort((p1, p2)=> sortByPrice==="hTl"? p2.price - p1.price : productsList)
        }
        if(byRatings){
            if(byRatings<3){
            sortedProducts = sortedProducts.filter((product)=>product.ratings<=3)
            }
            else{
            sortedProducts = sortedProducts.filter((product)=>product.ratings>= byRatings)
            }
        } 
        if(byAvailability){
          
           // sortedProducts = sortedProducts.filter((item)=>item[byAvailability])
           sortedProducts = sortedProducts.filter((item)=>item.availability=== byAvailability)
        }
        return sortedProducts 
    }
   
    return(
        <div className="list-layout"> 
        <ProductFilter/>
            {
            updatedProducts().map((product)=>(
                <ProductCard {...product}/>

            ))}
        </div>
    )
}