const express = require("express");
const router = express.Router();
const {
    signup,
    login,
    adminCreditCustomer,
    createAdminPin
} = require("../controllers/admin");


router.route("/signup-admin").post(signup);
router.route("/login-admin").post(login);
router.route("/admin-credit").put(adminCreditCustomer);
router.route("/set-pin").put(createAdminPin);


module.exports = router


