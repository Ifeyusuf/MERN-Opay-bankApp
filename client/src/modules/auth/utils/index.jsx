

export const reducer = (state, action) => {
    switch (action.type) {
        case "FIRSTNAME":
        return{...state, firstname: action.payload}
        
        case "MIDDLENAME":
            return{...state, middlename: action.payload}

        case "SURNAME":
            return{...state, surname: action.payload}

        case "EMAIL":
            return{...state, email: action.payload}

        case "PASSWORD":
            return{...state, password: action.payload}

        case "ADDRESS":
            return{...state, address: action.payload}

        case "TEL":
            return{...state, tel: action.payload}
    }
    
};

export const loginReducer = (state, action) => {
    switch(action.type)  {
        case "EMAIL" :
            return{...state, email: action.payload};

            case "PASSWORD":
                return{...state, password: action.payload}

                default: throw new Error(" Invalid email and password ")

    }

}

// export const reducer = (state, action) => {
//     if(action.type === "FIRSTNAME"){
//         return{...state, firstname: action.payload}
//     };

//     if(action.type === "MIDDLENAME"){
//         return{...state, middlename: action.payload}
//     };
    
//     if(action.type === "SURNAME"){
//         return{...state, surname: action.payload}
//     };
//     if(action.type === "EMAIL"){
//         return{...state, email: action.payload}
//     };
//     if(action.type === "PASSWORD"){
//         return{...state, password: action.payload}
//     };
//     if(action.type === "ADDRESS"){
//         return{...state, address: action.payload}
//     };
//     if(action.type === "TEL"){
//         return{...state, tel: action.payload}
//     };

//     throw new Error(" Invalid error form ")
// }