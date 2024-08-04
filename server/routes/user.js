const express = require("express");
const router = express.Router();

const {
    signup,
    login,
    // logout,
    disolayEmailForPasswordUpdate,
    postEmailForPassword,
    updatePassword,
    displayUpdatePassword,
    createPin,
    creditCustomer,
    resetPin,
    getUserFromClientSide,
    getuserDetailsByAccountNum
} = require("../controllers/user");
// const authUser = require("../middleWare/auth")



router.route("/signup-user").post(signup);
router.route("/login-user").post(login);
router.route("/submit-email").get(disolayEmailForPasswordUpdate);
router.route("/submitted").post(postEmailForPassword);
router.route("/update-password/:userId/:token").get(displayUpdatePassword);
router.route("/update-password/:userId/:token").put(updatePassword);
router.route("/current-user").get(getUserFromClientSide);
router.route("/user-details").post(getuserDetailsByAccountNum)

// router.use(authUser);

router.route("/set-pin").put(createPin);
router.route("/reset-pin").put(resetPin);
router.route("/credit-customer").put(creditCustomer);


module.exports = router