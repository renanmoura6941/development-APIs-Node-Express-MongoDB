const {Router} = require('express');
const {uuid} = require('uuidv4')

const routes = new Router();

module.exports = routes;

const products = []

routes.get('/products',(req,res)=>{
    return res.json(products);
})

routes.post('/products/', (req, res)=>{
    const {name, description, price , category} = req.body;
    const product = {
        id:uuid(),
        name,
        description,
        price,
        category,
    }
    products.push(product)
    return res.json(products)
})

routes.put('/products/:id', (req, res)=>{
    const {id} = req.params;
    const {name, description, price , category} = req.body;

    const productIndex = products.findIndex(element=> element.id == id)

    if(productIndex == -1){
        return res.status(400).json({error:"Product does not found"})
    }

    products.splice(productIndex,1 );

    const product = {
        id:uuid(),
        name,
        description,
        price,
        category,
    }
    products.push(product)

    return res.status(204).send();
})

routes.delete('/products/:id', (req, res)=>{
    const {id} = req.params;

    const productIndex = products.findIndex(product=> product.id == id)

    if(productIndex == -1){
        return res.status(400).json({error:"Product does not found"})
    }

    return res.json({message:'delete'})
})
