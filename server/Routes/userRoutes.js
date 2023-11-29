const express = require('express')
const router = express.Router()
const {userRegister, userLogin, showAllUsers} = require('../Controllers/userController')

router.post('/register', userRegister)

router.post('/login', userLogin)

router.get('/allusers', showAllUsers)

module.exports = router
