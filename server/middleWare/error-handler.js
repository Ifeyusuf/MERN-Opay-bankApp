const { StatusCodes } = require("http-status-codes");
const { customApiError } = require("../error");


// const errorHandlerMiddleware = (err, req, res, next) => {

//     const customError = {
//         msg : err.message || " something went wrong, please try again ",
//         statusCode : err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
//     }

//     if(err instanceof customApiError){
//         return res.status(err.statusCode).json( {msg: err.message} )
//     }

//     if(err.name === "ValidationError"){
//         customError.msg = Object.values(err.errors).map( (item) => item.message ).join(",");
//         customError.statusCode = 400
//     }

//     if(err.code && err.code === 11000){
//         customError.msg = ` Duplicate value entered ${Object.keys(err.keyValue)} field, please provide another value `;
//         customError.statusCode = 400
//     }

//     if(err.name === "CastError"){
//         customError.msg = ` No item found with id: ${Object.values(err.value)}  `;
//         customError.statusCode = 400
//     }

//     return res.status(customError.statusCode).json({success: false, msg: customError.msg})

// }

const errorHandlerMiddleware = (error, req, res, next) => {
    let errors = {email: "", password: "" }

    if(error instanceof customApiError) {
        if(error.message == " Invalid email "){
            errors.email = "You have entered a wrong email"
            return res.json({success: false, error: errors})
        }

        if(error.message == " Invalid password "){
            errors.password = "You have entered a wrong password"
            return res.json({ success: false, error: errors})
        }

        if(error.message === " incorrect email and password "){
            errors.password = " Input value is empty "
            return res.json({
                success: false,
                error: errors
            })
        }
    }
    return res.status(400).json( {
        success: false,
        error: error.message
    })
}

module.exports = errorHandlerMiddleware