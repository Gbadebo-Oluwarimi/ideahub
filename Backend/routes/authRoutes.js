const express = require('express')
const { Registercontroller, LoginController, LogoutController, forgotPassword, ResetPassword } = require('../controllers/authControllers')

const routes = express.Router()

routes.post('/', Registercontroller)
routes.post('/login', LoginController);
routes.post('/logout', LogoutController);
routes.post('/forgot-password', forgotPassword);
routes.post('/reset-password/:id/:token', ResetPassword);

module.exports = routes