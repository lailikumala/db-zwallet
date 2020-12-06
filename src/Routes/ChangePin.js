const pinRoute = require('express').Router()
const pinController = require('../Controllers/ChangePin')
const verifyToken = require('../Helpers/middleware/verifyToken')

pinRoute.patch('/:id',verifyToken.authentication, pinController.pin)
module.exports = pinRoute


