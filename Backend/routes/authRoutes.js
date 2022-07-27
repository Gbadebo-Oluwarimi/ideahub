const express = require('express')
const { Usercontroller } = require('../controllers/authControllers')

const routes = express.Router()

routes.get('/', Usercontroller)

module.exports = routes