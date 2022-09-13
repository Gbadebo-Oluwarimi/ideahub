const express = require("express")
const { dashboard, create_branch, getUser, get_Branch, get_particular_branch,create_Todo, getAllTodo, get_particular_todo, Update_todo, delete_Todo} = require("../controllers/dashboardControllers")
const isAuth = require("../middleware/auth")
const routes = express.Router()

routes.get('/', isAuth, dashboard);
routes.post('/create-todo-branch', isAuth, create_branch);
routes.get('/user', isAuth, getUser);
routes.get('/branch', isAuth, get_particular_branch);
routes.get('/getalltodo/:id', isAuth, getAllTodo);
routes.post('/todo_create', isAuth, create_Todo);
routes.post('/todo-update/:id', isAuth, Update_todo);
routes.post('/todo/:userid', isAuth, get_particular_todo)
routes.post('/todo-delete', isAuth, delete_Todo);
routes.get('/:id', isAuth, get_Branch);


module.exports = routes