export const initialState = {

    sortByPrice: "",
    range: "",
    byAvailability:{},
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
    FITNESS: "FITNESS"

}

export const productsReducer = (state, action) =>{
    console.log(action.type)

    switch(action.type){
        case ACTION_TYPES.LOW_TO_HIGH: 
        return {...state, sortByPrice: action.payload}

        case ACTION_TYPES.HIGH_TO_LOW: 
        return {...state, sortByPrice: action.payload}

        case RANGE: 
        return {...state, range: action.payload}

        case CASH_ON_DELIVERY:
            return {...state, byAvailability: {...state.byAvailability, ...action.payload}}

        case ONE_DAY_DELIVERY: 
            return {...state, byAvailability: {...state.byAvailability, ...action.payload}}
        case FIVE_STARS: 
            return {...state, byRatings: action.payload}
        case ABOVE_FOUR_STAR: 
            return {...state, byRatings: action.payload}
        case ABOVE_THREE_STAR: 
            return {...state, byRatings: action.payload}
        case BELOW_THREE_STAR:
            return {...state, byRatings: action.payload}
        case MALE: 
            return {...state, byGender: action.payload}
        case FEMALE: 
            return {...state, byGender: action.payload}
        case SMARTWATCHES: 
            return {...state, byCategory: {...state.byCategory, ...action.payload}}
        case CHRONOLOGICAL:
            return {...state, byCategory: {...state.byCategory, ...action.payload}}
        case WORKWEAR: 
             return {...state, byUse: {...state.byUse, ...action.payload}}
        case STYLISH: 
             return {...state, byUse: {...state.byUse, ...action.payload}}
        case FITNESS: 
             return {...state, byUse: {...state.byUse, ...action.payload}}
    }
}

