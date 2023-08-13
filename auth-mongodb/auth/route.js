
const { adminAuth } = require("../middleware/auth")
const express = require("express")
const router = express.Router()
const { register,login ,deleteUser} = require("./auth")
router.route("/register").post(register)
router.route("/login").post(login);

router.route("/deleteUser").delete(adminAuth, deleteUser)
module.exports = router