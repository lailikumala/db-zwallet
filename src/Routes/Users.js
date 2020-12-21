const userRoute = require('express').Router()
const usersController = require('../Controllers/Users')
const verifyToken = require('../Helpers/middleware/verifyToken')
const upload = require('../Helpers/Uploads')

userRoute.get("/check_pin" ,verifyToken.authentication, usersController.checkPin)
userRoute.get('/search_name', verifyToken.authentication, usersController.getUserName)
userRoute.get('/', verifyToken.authentication, usersController.getAllUsers)
userRoute.get('/', verifyToken.authentication, usersController.getUserPagination)
userRoute.get('/search', verifyToken.authentication, usersController.getUserSearch)
userRoute.get('/:id',  verifyToken.authentication, usersController.getUser)
userRoute.post('/', upload, verifyToken.authentication, usersController.createUser)
userRoute.post('/:id', upload, verifyToken.authentication, usersController.createUser)
userRoute.delete('/:id', verifyToken.authentication, verifyToken.authorization, usersController.deleteUser)
userRoute.patch('/:id', upload, verifyToken.authentication, usersController.updateUser)
module.exports = userRoute


