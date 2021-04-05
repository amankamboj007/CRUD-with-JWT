

const User = require('../model/model')

const adduser = async(req,res)=>{
    const validate = await User.findOne({email: req.body.email})
    if(validate) return res.status(400).send('Email already exists ')
    const adduser = new User({
        name: req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    const saveduser = await adduser.save()
    res.send(saveduser.name)
}

const getall = (req,res)=>{
    User.find({}).then(function (users) {
        res.send(users);
    })
}
const getid = async(req,res)=>{
    const id = req.params.id
    const data = await User.findOne({_id:id})
    res.send(data)
}
const updateuser = async(req,res)=>{
 
    let findUser = await User.findOneAndUpdate({_id:req.params._id},{name:req.body.name,email:req.body.email},{new:true})
    res.send('added')
}
const deleteuser = async(req,res)=>{
    const id = req.params.id
   await User.findOneAndRemove({_id:id})
   res.send('data deleted') 
 }
module.exports = {
    getall,
    adduser ,
    getid,
    updateuser,
    deleteuser
}
