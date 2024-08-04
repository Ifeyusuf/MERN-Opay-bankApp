const jwt = require("jsonwebtoken");


async function getCurrentAdmin(req) {
    try {
        const adminToken = req.cookies.adminToken;
        const verifyAdmin = jwt.verify(adminToken, process.env.JWT_SECRET)
        return verifyAdmin.adminId
    } catch (error) {
        console.log(error.msg);
    }
}


module.exports = getCurrentAdmin