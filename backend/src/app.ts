import express from 'express';
import Router from './routers';
import body from 'body-parser';
import Cors from 'cors';
import * as dotenv from 'dotenv';
//Configs
dotenv.config();
const App = express();
App.use(express.json());
App.use(body.json());
App.use(body.urlencoded({ extended: false }));
App.use(Cors());
App.use(Router);

export { App };