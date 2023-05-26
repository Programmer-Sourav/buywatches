export const initialState = {

    sortByPrice: "",
    range: "",
    byAvailability:[],
    byRatings:"",
    byGender: [],
    byCategory: [],
    byUse: [],
    currentProducts: [], 
    search: []
}

export const ACTION_TYPES = {

    INITIALIZE : "INITIALIZE",
    LOW_TO_HIGH: "LOW_TO_HIGH",
    HIGH_TO_LOW: "HIGH_TO_LOW",
    RANGE :"RANGE",
    BY_AVAILABILITY: "BY_AVAILABILITY",
    FIVE_STARS : "FIVE_STARS",
    ABOVE_FOUR_STAR: "ABOVE_FOUR_STAR",
    ABOVE_THREE_STAR: "ABOVE_THREE_STAR",
    BELOW_THREE_STAR: "BELOW_THREE_STAR",
    BY_CATEGORY: "BY_CATEGORY",
    BY_GENDER: "BY_GENDER",
    BY_USE: "BY_USE", 
    SEARCH: "SEARCH"

}

export const productsReducer = (state, action) =>{
  
    switch(action.type){
        case ACTION_TYPES.INITIALIZE:
        // console.log(4545, {...state, currentProducts: action.cur_products}) 
        return {...state, currentProducts: action.cur_products}    
        case ACTION_TYPES.LOW_TO_HIGH: 
        console.log(state)
        console.log({...state, sortByPrice: action.payload})
        return {...state, sortByPrice: action.payload}

        case ACTION_TYPES.HIGH_TO_LOW: 
        return {...state, sortByPrice: action.payload}

        case ACTION_TYPES.RANGE: 
        return {...state, range: action.payload}

        case ACTION_TYPES.BY_AVAILABILITY:
           // console.log(144, state.byAvailability.includes(action.payload))
          if(state.byAvailability.includes(action.payload)){
            return {...state, byAvailability: state.byAvailability.filter((item)=>item!=action.payload)}
          }
          return {...state, byAvailability: [...state.byAvailability, action.payload]}
        case ACTION_TYPES.BY_CATEGORY: 
        if(state.byCategory.includes(action.payload)){
            return {...state, byCategory: state.byCategory.filter((item)=> item!=action.payload)}
        }
        return {...state, byCategory: [...state.byCategory, action.payload]}
        case ACTION_TYPES.BY_GENDER: 
        if(state.byGender.includes(action.payload)){
            return {...state, byGender: state.byGender.filter((item)=> item!=action.payload)}
        }
        return {...state, byGender: [...state.byGender, action.payload]}
        case ACTION_TYPES.BY_USE: 
        if(state.byUse.includes(action.payload)){
            return {...state, byUse: state.byUse.filter((item)=> item!=action.payload)}
        }
        return {...state, byUse: [...state.byUse, action.payload]}
        case ACTION_TYPES.FIVE_STARS: 
            return {...state, byRatings: action.payload}
        case ACTION_TYPES.ABOVE_FOUR_STAR: 
            return {...state, byRatings: action.payload}
        case ACTION_TYPES.ABOVE_THREE_STAR: 
            return {...state, byRatings: action.payload}
        case ACTION_TYPES.BELOW_THREE_STAR:
            return {...state, byRatings: action.payload}
        case ACTION_TYPES.SEARCH: 
            return {...state, search: [...state.search, action.payload]}    
       
        case ACTION_TYPES.CLEAR:
           
             return {
                sortByPrice: "",
                range: "",
                rangeVal:1000,
                byAvailability: "",
                byRatings:"",
                byGender: "",
                byCategory: "",
                byUse: "",
             } 
        default: 
        return state        
    }
}

