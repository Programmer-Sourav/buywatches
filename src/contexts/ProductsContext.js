import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export function ProductsProvider({children}){

   const [ productsList, setProductsList ] = useState([]) /**State to hold data from api */
   const [ loading, setLoading ] = useState(false)

   const getProducts = async() =>{
    setLoading(true)
    try{
       const response = await fetch("/api/products",{
        method: 'GET'
    })

    const { products } = await response.json();
    //console.log(products)
    setLoading(false)
    setProductsList(products)
    }
    catch(error){
        console.error(error)
    }
   }


   useEffect(()=>{getProducts()},[])

    return(
        <ProductsContext.Provider value = {{productsList, loading}}>{children}</ProductsContext.Provider>
    )

}