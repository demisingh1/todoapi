const express = require('express');
const { getAllTasks, CreateTask, FindSingleTask, UpdateTask } = require('../controller/taskController');
const routes = express.Router();

routes.get('/api/v1/' , getAllTasks);
routes.post('/api/v1/' , CreateTask);
routes.get('/api/v1/:id' , FindSingleTask);
routes.patch('/api/v1/:id' , UpdateTask);

module.exports = routes;