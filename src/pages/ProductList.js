import { useContext } from "react";
import { ProductsContext } from "../contexts/ProductsContext";
import ProductCard from "../Components/ProductCard";
import ProductFilter from "../pages/ProductFilter"
import "../Stylesheets/productslist.css"


export default function ProductList(){

    const { productsList, sortByPrice, range, byAvailability, byRatings, byGender, byCategory, byUse, productsState, search } = useContext(ProductsContext)
    
    const updatedProducts = () =>{
       
        let sortedProducts = [...productsState]
      

        if(range){
            sortedProducts = sortedProducts.filter((item)=>item.price<=range)
        }
        if(sortByPrice){
           
            sortedProducts = sortedProducts.sort((p1, p2)=> sortByPrice==="lTh"? p1.price - p2.price : productsState)
            sortedProducts = sortedProducts.sort((p1, p2)=> sortByPrice==="hTl"? p2.price - p1.price : productsState)
        }
        if(byRatings.length>0){
            if(byRatings<3){
            sortedProducts = sortedProducts.filter((product)=>product.ratings<=3)
            }
            else{
            sortedProducts = sortedProducts.filter((product)=>product.ratings>= byRatings)
            }
        } 
        if(byAvailability.length>0){
        sortedProducts = sortedProducts.filter((item)=>{
            return byAvailability.includes(item.availability)
        })
        }

        if(byCategory.length>0){
         
        sortedProducts = sortedProducts.filter((item)=> byCategory.includes(item.Category))
       
        }
        if(byGender.length>0){
        sortedProducts = sortedProducts.filter((item)=> byGender.includes(item.gender))
        
        }
        if(byUse.length>0){
        sortedProducts = sortedProducts.filter((item)=> byUse.includes(item.use))
        
        }
        
        if(search.trim()!=="" && search.length>1){
        sortedProducts = search ? sortedProducts.filter((product)=> product.item.toUpperCase().includes(search.toUpperCase())) : productsState  
        }
        
        return sortedProducts 
    }
   
    return(
        <div className="list-layout"> 
        
        <ProductFilter/>
      
        
        <div className="list-right">
            {   
            updatedProducts().length===0 ? <h2 className="warning-text">No items found. Please Try again...</h2> : updatedProducts().map((product)=>(
                <ProductCard data = {product}/>

            ))}
        </div>
       
        </div>
    )
}