const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:false
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model('Api_new',userSchema,'Api_new')
