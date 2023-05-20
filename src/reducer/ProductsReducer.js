export const initialState = {

    sortByPrice: "",
    range: "",
    byAvailability:[],
    byRatings:"",
    byGender: "",
    byCategory: {},
    byUse: {},
    currentProducts: []
}

export const ACTION_TYPES = {

    LOW_TO_HIGH: "LOW_TO_HIGH",
    HIGH_TO_LOW: "HIGH_TO_LOW",
    RANGE :"RANGE",
    CASH_ON_DELIVERY : "CASH_ON_DELIVERY",
    ONE_DAY_DELIVERY: "ONE_DAY_DELIVERY",
    FIVE_STARS : "FIVE_STARS",
    ABOVE_FOUR_STAR: "ABOVE_FOUR_STAR",
    ABOVE_THREE_STAR: "ABOVE_THREE_STAR",
    BELOW_THREE_STAR: "BELOW_THREE_STAR",
    MALE : "MALE",
    FEMALE: "FEMALE",
    SMARTWATCHES: "Smartwatches",
    CHRONOLOGICAL: "Chronological",
    WORKWEAR: "WORK_WEAR",
    STYLISH: "STYLISH",
    FITNESS: "FITNESS", 
    CLEAR: "Clear"

}

export const productsReducer = (state, action) =>{
    console.log(123,action.type)
    console.log(121,action.payload)
    

    switch(action.type){
        case ACTION_TYPES.LOW_TO_HIGH: 
        console.log(state)
        console.log({...state, sortByPrice: action.payload})
        return {...state, sortByPrice: action.payload}

        case ACTION_TYPES.HIGH_TO_LOW: 
        return {...state, sortByPrice: action.payload}

        case ACTION_TYPES.RANGE: 
        return {...state, range: action.payload}

        case ACTION_TYPES.CASH_ON_DELIVERY:
            console.log(144, state)
            console.log(146, [...state.byAvailability, action.payload])
            //console.log(166, {...state, byAvailability: [...state.byAvailability, action.payload]})
          //return {...state, byAvailability: [...state.byAvailability, action.payload]}
          return {...state, byAvailability: action.payload}

        case ACTION_TYPES.ONE_DAY_DELIVERY: 
       // console.log(141,{...state, byAvailability: action.payload})
        return {...state, byAvailability: action.payload}
        case ACTION_TYPES.FIVE_STARS: 
            return {...state, byRatings: action.payload}
        case ACTION_TYPES.ABOVE_FOUR_STAR: 
            return {...state, byRatings: action.payload}
        case ACTION_TYPES.ABOVE_THREE_STAR: 
            return {...state, byRatings: action.payload}
        case ACTION_TYPES.BELOW_THREE_STAR:
            return {...state, byRatings: action.payload}
        case ACTION_TYPES.MALE: 
            return {...state, byGender: action.payload}
        case ACTION_TYPES.FEMALE: 
            return {...state, byGender: action.payload}
        case ACTION_TYPES.SMARTWATCHES: 
            return {...state, byCategory: {...state.byCategory, ...action.payload}}
        case ACTION_TYPES.CHRONOLOGICAL:
            return {...state, byCategory: {...state.byCategory, ...action.payload}}
        case ACTION_TYPES.WORKWEAR: 
             return {...state, byUse: {...state.byUse, ...action.payload}}
        case ACTION_TYPES.STYLISH: 
             return {...state, byUse: {...state.byUse, ...action.payload}}
        case ACTION_TYPES.FITNESS: 
             return {...state, byUse: {...state.byUse, ...action.payload}}
        case ACTION_TYPES.CLEAR:
           
             return {
                sortByPrice: "",
                range: "",
                rangeVal:1000,
                byAvailability: "",
                byRatings:"",
                byGender: "",
                byCategory: {},
                byUse: {},
             } 
        default: 
        return state        
    }
}

