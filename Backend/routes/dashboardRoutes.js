const express = require("express")
const { dashboard, create_branch } = require("../controllers/dashboardControllers")
const isAuth = require("../middleware/auth")
const routes = express.Router()

routes.get('/', isAuth, dashboard);
routes.post('/create-todo-branch', isAuth, create_branch);

module.exports = routes