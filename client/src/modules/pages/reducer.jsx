

export const transferReducer = (state, action) => {
    switch (action.type) {
        case "ACCOUNT_NUMBER":  
        return {...state, accountNum: action.payload}
            
            case "AMOUNT":
            return {...state, amount: action.payload}

            case "PIN":  
            return {...state, pin: action.payload}
    
        default:
            throw new Error(" invalid input ")
    }
}