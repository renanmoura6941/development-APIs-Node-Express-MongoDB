import { Router } from 'express';
import UserController from './controllers/UserController';
import AuthController from './controllers/AuthController';
import checkCredentials from './middlewares/checkCredentials';


const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/auth', AuthController.store);

routes.use(checkCredentials)
routes.get('/users', checkCredentials, UserController.show);
routes.put('/users', checkCredentials, UserController.update);
routes.delete('/users', checkCredentials, UserController.delete);


export default routes;