const phoneRoute = require('express').Router()
const phoneController = require('../Controllers/ChangePhone')
const verifyToken = require('../Helpers/middleware/verifyToken')

phoneRoute.patch('/:id',verifyToken.authentication, phoneController.phone)
module.exports = phoneRoute


