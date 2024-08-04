const jwt = require("jsonwebtoken");
const { Unauthenticated } = require("../error");


async function verifyUser(req, res, next) {
    try {
        const userToken = req.cookies.userToken;
        await jwt.verify(userToken, process.env.JWT_SECRET);
        next()
    } catch (error) {
        throw new Unauthenticated( " user Unauthenticated " )
    }
}

module.exports = verifyUser