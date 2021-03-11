import { Router } from 'express';
import UserController from './controllers/UserController'
import AuthController from './controllers/AuthController'


const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.store);

export default routes;