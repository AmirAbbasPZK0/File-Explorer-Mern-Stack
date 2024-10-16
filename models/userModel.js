const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstname : {
        required : true,
        type : String
    },
    lastname : {
        required : true,
        type : String
    },
    email : {
        required : true,
        type : String
    },
    phoneNumber : {
        required : true,
        type : String
    },
    username : {
        required : true,
        type : String
    },
    password : {
        required : true,
        type : String
    },
})

const userModel = mongoose.model("User" , userSchema)

module.exports = userModel