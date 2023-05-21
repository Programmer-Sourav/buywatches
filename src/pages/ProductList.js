import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../Components/ProductCard";
import ProductFilter from "../pages/ProductFilter"
import "../Stylesheets/productslist.css"

export default function ProductList(){

    const { productsList, sortByPrice, range, byAvailability, byRatings, byGender, byCategory, byUse, productsState } = useContext(ProductsContext)
    
   console.log(1211, range)
   console.log(1444, productsState)
    const updatedProducts = () =>{
       
        let sortedProducts = productsState
       // console.log("SORTED ",sortedProducts)

        if(range){
            console.log(555, range)
            sortedProducts = sortedProducts.filter((item)=>item.price<=range)
        }
        if(sortByPrice){
           
            sortedProducts = sortedProducts.sort((p1, p2)=> sortByPrice==="lTh"? p1.price - p2.price : productsState)
            sortedProducts = sortedProducts.sort((p1, p2)=> sortByPrice==="hTl"? p2.price - p1.price : productsState)
        }
        if(byRatings){
            if(byRatings<3){
            sortedProducts = sortedProducts.filter((product)=>product.ratings<=3)
            }
            else{
            sortedProducts = sortedProducts.filter((product)=>product.ratings>= byRatings)
            }
        } 
        if(byAvailability.length>0){
            console.log(444, byAvailability)
            //sortedProducts = sortedProducts.filter((item)=>item[byAvailability])
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