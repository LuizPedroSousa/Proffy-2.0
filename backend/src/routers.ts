import express from 'express';
import UsersController from './App/Controlers/usersController';
import authMidleware from './App/Midlewares/auth';
const Router = express.Router();

const userController = new UsersController;

Router.get('/users/find', authMidleware, userController.index);
Router.post('/users/register', userController.create);
Router.post('/users/auth', userController.auth);

Router.post('/users/forgot_password', userController.forgot_password);
Router.post('/users/reset_password', userController.reset_password);


export default Router;