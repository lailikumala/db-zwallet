const authRoute = require('express').Router()
const authController = require('../Controllers/Auth.js')
const upload = require('../Helpers/Uploads')

authRoute.post('/signup', upload, authController.signup)
authRoute.post('/login', authController.login)
authRoute.patch('/create_pin', authController.createPin)
authRoute.patch('/reset_password', authController.forgot)


module.exports = authRoute