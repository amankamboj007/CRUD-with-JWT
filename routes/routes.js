const express = require('express')
const { findByIdAndDelete } = require('../model/model')
const router = require('express').Router()

const verify = require('../middleware/verifytoken')

const User = require('../model/model')

const { getall,adduser,getid,updateuser,deleteuser }  = require('../contoller/routes controller')


router.post('/',verify,adduser)
//get all
router.get('/',verify,getall)

//get id
router.get('/:id',verify,getid)


router.delete('/:id',verify,deleteuser)
router.put('/:_id',verify,updateuser)
module.exports = router;
