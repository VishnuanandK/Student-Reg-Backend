require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
const rgServer = express()
require('./DB/connection')
rgServer.use(cors())
rgServer.use(express.json())

rgServer.use(router)

const PORT =4000

rgServer.listen(PORT,()=>{
    console.log(`Register server started at port : ${PORT}`);
})
rgServer.get('/',(req,res)=>{
    res.send("<h1>Register server started... and waiting for client request</h1>")
})
