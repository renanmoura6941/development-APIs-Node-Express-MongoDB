const {Router} = require('express');
const {uuid} = require('uuidv4')

const routes = new Router();

module.exports = routes;

const products = []

routes.get('/',(req,res)=>{
    return res.json(products);
})

routes.post('/products', (req, res)=>{
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

routes.put('/', (req, res)=>{
    return res.json({message:'put'})
})

routes.delete('/', (req, res)=>{
    return res.json({message:'delete'})
})
