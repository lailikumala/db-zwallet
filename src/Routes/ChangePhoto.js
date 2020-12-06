const photoRoute = require('express').Router()
const photoController = require('../Controllers/ChangePhoto')
const verifyToken = require('../Helpers/middleware/verifyToken')
const upload = require('../Helpers/Uploads')

photoRoute.patch('/:id', upload, verifyToken.authentication, photoController.photo)
module.exports = photoRoute


