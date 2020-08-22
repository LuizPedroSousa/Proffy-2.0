import express from 'express';
import classController from './Controllers/classesController';
import connectionsController from './Controllers/connectionController';

const router = express.Router();

const ClassController = new classController;
const ConnectionsController = new connectionsController;

router.get('/classes', ClassController.index);
router.get('/classes/:find', ClassController.find);
router.post('/classes', ClassController.create);

router.get('/connections', ConnectionsController.index);
router.post('/connections', ConnectionsController.create);

export default router;