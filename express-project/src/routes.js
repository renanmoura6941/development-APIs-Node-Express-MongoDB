import { Router } from 'express';
import CategoryController from './controllers/CategoryController'
import ProductController from './controllers/ProductController'

const routes = new Router();

routes.post('/categories', CategoryController.store);
routes.get('/categories', CategoryController.index);
routes.put('/categories/:id', CategoryController.update);
routes.delete('/categories/:id', CategoryController.delete);

routes.get('/products', ProductController.index)
routes.post('/products', ProductController.store);

export default routes;
