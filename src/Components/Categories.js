import { getCategory } from "../Utils/NetworkApis"
import { categories } from "../backend/db/categories";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../contexts/ProductsContext";
import { ACTION_TYPES } from "../reducer/ProductsReducer";
import { useContext, useEffect, useState } from "react";

export default function Categories(){
    const { dispatch } = useContext(ProductsContext)
    const navigate = useNavigate()

    const goTo = (Category) =>{
        navigate("/store")
        dispatch({type: ACTION_TYPES.BY_CATEGORY, payload: {value: Category, checkedFlag: true}})
      }
     
  
  
      const [categories, setCategories] = useState([])
  
      const  getCategory = () => {
          const url = '/api/categories';
          fetch(url)
          .then(response => response.json())
          .then(data =>{ 
              setCategories(data.categories)
              })
          .catch(error => {
              console.error(error);
          });
        }
  
        useEffect(()=>{getCategory()},[])

    return(
        <div> 
     {categories.map((category)=>(
        <h1 onClick={()=>goTo(category.Category)}>{category.Category}  </h1>
    ))}

        </div>
    )
}