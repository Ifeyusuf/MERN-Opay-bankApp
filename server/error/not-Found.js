const { StatusCodes } = require("http-status-codes");
const customApiError = require("./custom-Api-error");

class NotFound extends customApiError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

module.exports = NotFound