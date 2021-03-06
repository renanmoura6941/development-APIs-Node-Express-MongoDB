import { Router } from 'express';
import { uuid } from 'uuidv4';
import CategoryController from './controllers/CategoryController'

const routes = new Router();

routes.post('/categories', CategoryController.store);

export default routes;










const products = []

routes.get('/products', (req, res) => {
    return res.json(products);
})

routes.post('/products/', (req, res) => {
    const { name, description, price, category } = req.body;
    const product = {
        id: uuid(),
        name,
        description,
        price,
        category,
    }
    products.push(product)
    return res.status(201).send();
})

routes.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, description, price, category } = req.body;

    const productIndex = products.findIndex(element => element.id == id)

    if (productIndex == -1) {
        return res.status(400).json({ error: "Product does not found" })
    }

    products.splice(productIndex, 1);

    const product = {
        id: uuid(),
        name,
        description,
        price,
        category,
    }
    products.push(product)

    return res.status(200).send();
})

routes.delete('/products/:id', (req, res) => {
    const { id } = req.params;

    const productIndex = products.findIndex(product => product.id == id)

    if (productIndex == -1) {
        return res.status(400).json({ error: "Product does not found" })
    }

    products.splice(productIndex, 1);

    return res.status(204).send();
})

export default routes;