import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({children}){

   const [ productsList, setProductsList ] = useState([]) /**State to hold data from api */


   const getProducts = async() =>{
    try{
       const response = await fetch("/api/products",{
        method: 'GET'
    })

    const { products } = await response.json();
    console.log(products)
    setProductsList(products)
    }
    catch(error){
        console.error(error)
    }
   }


   useEffect(()=>{getProducts()},[])

    return(
        <ProductsContext.Provider value = {{productsList}}>{children}</ProductsContext.Provider>
    )

}