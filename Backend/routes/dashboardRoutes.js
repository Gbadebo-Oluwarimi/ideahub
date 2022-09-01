const express = require("express")
const { dashboard, create_branch, getUser, get_Branch, get_particular_branch} = require("../controllers/dashboardControllers")
const isAuth = require("../middleware/auth")
const routes = express.Router()

routes.get('/', isAuth, dashboard);
routes.post('/create-todo-branch', isAuth, create_branch);
routes.get('/user', isAuth, getUser);
routes.get('/:id', isAuth, get_Branch)
routes.get('/branches', isAuth, get_particular_branch);

module.exports = routes