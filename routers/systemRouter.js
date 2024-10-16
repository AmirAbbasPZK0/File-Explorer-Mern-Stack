const express = require("express")
const systemController = require("../controllers/systemController")
const systemRouter = express.Router()

systemRouter.route("/")
.post(systemController.getAllData)

systemRouter.route("/create-file")
.post(systemController.createFile)

systemRouter.route("/create-folder")
.post(systemController.createFolder)


module.exports = systemRouter