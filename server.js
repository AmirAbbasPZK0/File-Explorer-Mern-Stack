const express = require("express")
const cors = require("cors")
const authRouter = require("./routers/authRouter")
const systemRouter = require("./routers/systemRouter")
const fs = require("fs")

require("./lib/dbConnection")

require('dotenv').config()

const app = express()

const corsOptions = { 
    origin : "http://localhost:5173"
}

app.use(express.json())
app.use(express.urlencoded())
app.use(cors(corsOptions))

const port = 4000

app.use("/api/auth/" , authRouter)
app.use("/api/system/" , systemRouter)

app.listen(port , ()=>{
    console.log(`App is running on port ${port}`)
})