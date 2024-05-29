const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");
const user = require("../models/user.js");

router
.route("/signup") 
.get( userController.renderSignUpForm)  //signup  form route 
.post( wrapAsync(userController.signup)); //signup route

router
.route("/login")
 .get( userController.renderLoginForm)   //login form route
.post(                         //login route
saveRedirectUrl, 
passport.authenticate("local",
 { failureRedirect:"/login", 
 failureFlash: true
}),
userController.login
);



//logout router
router.get("/logout", userController.logout);

module.exports = router;