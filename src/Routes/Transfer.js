const transferRoute = require('express').Router()
const transferController = require('../Controllers/Transfer')
const verifyToken = require('../Helpers/middleware/verifyToken')

transferRoute.get('/', verifyToken.authentication, transferController.getPagination)
transferRoute.get('/', verifyToken.authentication, transferController.getAllTransfer)
transferRoute.get('/search', verifyToken.authentication, transferController.getReciever)
transferRoute.get('/join', verifyToken.authentication, transferController.getTransfer)
transferRoute.get('/:id', verifyToken.authentication, transferController.getTransferId)
transferRoute.get('/:id_reciever', verifyToken.authentication, transferController.getTransferHistory)
transferRoute.post('/', verifyToken.authentication, transferController.createTransfer)
transferRoute.put('/:id', verifyToken.authentication, transferController.updateTransfer)
transferRoute.delete('/:id', verifyToken.authentication, transferController.deleteTransfer)
transferRoute.get('/history/:id', verifyToken.authentication, transferController.getHistoryUser)

module.exports = transferRoute


