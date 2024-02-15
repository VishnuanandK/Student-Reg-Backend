const express = require('express')
const registerController = require('../Controller/registerController')
const router =new express.Router()

router.post('/register',registerController.register)
router.get('/all-student',registerController.getAllStudents)

module.exports=router