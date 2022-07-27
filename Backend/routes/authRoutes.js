const express = require('express')
const { Registercontroller, LoginController, LogoutController } = require('../controllers/authControllers')

const routes = express.Router()

routes.post('/', Registercontroller)
routes.post('/login', LoginController);
routes.post('/logout', LogoutController)

module.exports = routes