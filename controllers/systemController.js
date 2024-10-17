const fs = require("fs")
const { dirname } = require('path');
const appDir = dirname(require.main.filename);

module.exports.getAllData = async (req , res) => {

    const token = req.headers.authorization
    
    if(!token){
        res.status(401).json({message : "UnAuthorized" , action : false})
        return false
    }

    const {path} = req.body

    const appAddress = appDir.split("\\").filter(item => item !== "backend").join("\\")

    const result = fs.readdirSync(`${appAddress}/${path}`)
    res.json(result)
    
}

module.exports.createFolder = async (req , res) => {

    const token = req.headers.authorization
    
    if(!token){
        res.status(401).json({message : "UnAuthorized" , action : false})
        return false
    }

    const {path} = req.body
    const appAddress = appDir.split("\\").filter(item => item !== "backend").join("\\")
    try{
        fs.mkdirSync(`${appAddress}/${path}`)
        res.json({message : "Folder Created"})
    }catch(err){
        console.log(err)
    }
}

module.exports.deleteFolder = async (req , res) => {
    
    const token = req.headers.authorization
    if(!token){
        res.status(401).json({message : "UnAuthorized" , action : false})
        return false
    }

    const appAddress = appDir.split("\\").filter(item => item !== "backend").join("\\")

    const {path} = req.body

    fs.rmSync(`${appAddress}/${path}` ,  { recursive: true })
    res.json({message : "Folder has been deleted"})

}

module.exports.createFile = async (req , res) => {

    const token = req.headers.authorization
    
    if(!token){
        res.status(401).json({message : "UnAuthorized" , action : false})
        return false
    }

    const {path} = req.body
    const appAddress = appDir.split("\\").filter(item => item !== "backend").join("\\")
    
    
    try{
        fs.writeFileSync(`${appAddress}/${path}`, "")
        res.json({message : "File Created"})
    }catch(err){
        console.log(err)
    }
}

module.exports.deleteFile = async (req , res) => {
    
    if(!token){
        res.status(401).json({message : "UnAuthorized" , action : false})
        return false
    }
    const {path} = req.body
    const appAddress = appDir.split("\\").filter(item => item !== "backend").join("\\")

    fs.unlinkSync(`${appAddress}/${path}`)
    res.json({message : "File has been Deleted"})
} 