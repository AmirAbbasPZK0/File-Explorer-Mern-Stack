const express = require("express")
const systemController = require("../controllers/systemController")
const systemRouter = express.Router()

systemRouter.route("/")
.post(systemController.getAllData)

systemRouter.route("/file")
.post(systemController.createFile)
.delete(systemController.deleteFile)


systemRouter.route("/folder")
.post(systemController.createFolder)
.delete(systemController.deleteFolder)

module.exports = systemRouter