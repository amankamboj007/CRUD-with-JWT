const express = require('express')

const app = express()
//importing routes 
const routes = require('./routes/routes') 
const auth = require('./middleware/auth')
app.use(express.json())

const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

//mongoose connect 
mongoose.connect(process.env.mongo_url,{useNewUrlParser:true, useUnifiedTopology: true },()=>{
    console.log('connected')
})

//routes

app.use('/api/user',routes)

app.use('/api',auth)
app.listen(process.env.PORT,()=>{
    console.log(`Server is up  `)
})
