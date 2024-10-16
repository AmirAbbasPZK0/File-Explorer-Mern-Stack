const userModel = require("../models/userModel")
const authConfigs = require("../configs/auth")

module.exports.register = async (req , res) => {

    const {username , email , password , firstname , lastname , phoneNumber} = req.body

    const isUserExists = await userModel.findOne({
        $or : [{username} , {email} , {phoneNumber}]
    })

    if(isUserExists){
        res.json.status(409).json({message : "This User Has Already Exists" , action : false})
        return false
    }

    const hashedPassword = await authConfigs.hashPassword(password)

    const user = await userModel.create({
        username,
        email,
        password : hashedPassword,
        firstname,
        lastname,
        phoneNumber
    })

    const token = authConfigs.generateToken({email : email})

    if(user){
        res.json({token , action : true})
    }
    
}

module.exports.login = async (req , res) => {
    
    const {connector , password} = req.body

    const user = await userModel.findOne({
        $or : [{email : connector} , {username : connector}]
    })

    if(!user){
        res.status(404).json({message : "User does not exists" , action : false})
        return false
    }

    const isValidPass = await authConfigs.comparePass(password , user.password)

    if(!isValidPass){
        res.status(401).json({message : "Username | Email or Password my not be correct! Please try again" , action : false})
        return false
    }

    const token = authConfigs.generateToken({email : user.email})
    
    res.json({token , action : true})
    

}

module.exports.getUser = async (req , res) => {
    
    const token = req.headers.authorization
    
    if(!token){
        res.status(401).json({message : "UnAuthorized" , action : false})
        return false
    }

    const tokenPayload = authConfigs.verifyToken(token)

    if(!tokenPayload){
        res.status(401).json({message : "UnAuthorized" , axtion : false})
        return false
    }

    const user = await userModel.findOne({
        $or : [{email : tokenPayload.email}]
    } , "-__v -_id -password")


    res.json({user , action : true})

}