const { StatusCodes } = require("http-status-codes");
const customApiError = require("./custom-Api-error");

class Unauthenticated extends customApiError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.UNAUTHORIZED
    }
}

module.exports = Unauthenticated