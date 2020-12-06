const topupRoute = require('express').Router()
const topupController = require('../Controllers/Topup')
const verifyToken = require('../Helpers/middleware/verifyToken')

topupRoute.get('/', verifyToken.authentication, topupController.getAllTopup)
topupRoute.get('/:id',  verifyToken.authentication, topupController.getTopup)
topupRoute.post('/',  verifyToken.authentication, topupController.createTopup)
topupRoute.put('/:id',  verifyToken.authentication, topupController.updateTopup)
topupRoute.delete('/:id',  verifyToken.authentication, topupController.deleteTopup)

module.exports = topupRoute


