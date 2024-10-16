const express = require("express")

const authRouter = express.Router()
const authController = require("../controllers/authController")

authRouter.post("/login" , authController.login)
authRouter.post("/signup" , authController.register)
authRouter.get("/me" , authController.getUser)

module.exports = authRouter