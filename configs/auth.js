const jsonwebtoken = require("jsonwebtoken")
const bcryptjs = require("bcryptjs")


module.exports.generateToken = (data) => {
    const token = jsonwebtoken.sign({...data} , process.env.PRIVATE_KEY , {expiresIn : "24h"})
    return token
}

module.exports.hashPassword = async (password) => {
    const hashedPass = await bcryptjs.hash(password , 12)
    return hashedPass
}

module.exports.comparePass = async (password , hashedPass) => {
    const isValid = await bcryptjs.compare(password , hashedPass)
    return isValid
}

module.exports.verifyToken = (token) => {
    try{
        const tokenPayload = jsonwebtoken.verify(token , process.env.PRIVATE_KEY)
        return tokenPayload
    }catch(err){
        console.log(err)
    }
}