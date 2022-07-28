const express = require("express")
const { dashboard } = require("../controllers/dashboardControllers")
const isAuth = require("../middleware/auth")
const routes = express.Router()

routes.get('/', isAuth, dashboard)

module.exports = routes