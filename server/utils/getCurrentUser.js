const jwt = require("jsonwebtoken")

async function getCurrentUser(req) {
    const userToken = req.cookies.userToken;
    const verifiyUser = await jwt.verify(userToken, process.env.JWT_SECRET);
    return verifiyUser.userId
};


module.exports = getCurrentUser