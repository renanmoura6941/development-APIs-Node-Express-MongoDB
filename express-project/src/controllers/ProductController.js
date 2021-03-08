import  Product  from "../models/Product";

class ProductController {

    async store(req, res) {
        const { name, description, price, category } = req.body;

        const product = await Product.create({
            name, description, price, category
        });

        return res.json(product);

    }

    async index(req, res) {
        const products = await Product.find({});
        return res.json(products);
    }

    async update(res, body) {
        const { id } = req.params;
        const { name, description, price, category } = res.body;

        const product = await Product.findById(id);

        if (product) {
            return res.status(400).json({ error: 'product does exist' });
        }

        product.name = name;
        product.price = price;
        product.description = description;
        product.category = category;

        Product.save(product);
        
        return res.json(product);

    }

}

export default new ProductController();