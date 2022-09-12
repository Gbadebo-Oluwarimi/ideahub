const express = require("express")
const { dashboard, create_branch, getUser, get_Branch, get_particular_branch,create_Todo, getAllTodo} = require("../controllers/dashboardControllers")
const isAuth = require("../middleware/auth")
const routes = express.Router()

routes.get('/', isAuth, dashboard);
routes.post('/create-todo-branch', isAuth, create_branch);
routes.get('/user', isAuth, getUser);
routes.get('/branch', isAuth, get_particular_branch);
routes.get('/getalltodo/:id', isAuth, getAllTodo);
routes.post('/todo_create', isAuth, create_Todo)

routes.get('/:id', isAuth, get_Branch);


module.exports = routes