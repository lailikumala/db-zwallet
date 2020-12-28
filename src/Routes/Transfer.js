const transferRoute = require('express').Router()
const transferController = require('../Controllers/Transfer')
const verifyToken = require('../Helpers/middleware/verifyToken')

transferRoute.get('/get/:id', verifyToken.authentication, transferController.getAllTransfer)
transferRoute.get('/:id', verifyToken.authentication, transferController.getTransfer)
transferRoute.post('/', verifyToken.authentication, transferController.createTransfer)
transferRoute.put('/:id', verifyToken.authentication, transferController.updateTransfer)
transferRoute.delete('/:id', verifyToken.authentication, transferController.deleteTransfer)
module.exports = transferRoute


