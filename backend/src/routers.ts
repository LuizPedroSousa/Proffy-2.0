import express from 'express';
import UsersController from './Controlers/usersController';
import ProjectController from './Controlers/projectController';
import authMidleware from './Midlewares/auth';
const Router = express.Router();

const userController = new UsersController;
const projectController = new ProjectController;

Router.get('/users/find', userController.index);
Router.post('/users/register', userController.create);
Router.post('/users/auth', userController.auth);

Router.get('/projects', authMidleware, projectController.index);

export default Router;