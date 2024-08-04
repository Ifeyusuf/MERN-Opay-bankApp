const BadRequest = require("./bad-request");
const customApiError = require("./custom-Api-error");
const NotFound = require("./not-Found");
const Unauthenticated = require("./unAuthenticate");


module.exports = {
    customApiError,
    BadRequest,
    NotFound,
    Unauthenticated
}