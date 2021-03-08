import Product from "../models/Product";

class ProductController {

    async store(req, res) {
        const { name, description, price, category } = req.body;

        const data = { name, description, price, category };

        const productExists = await Product.findOne(data);

        if (productExists) {
            return res.status(400).json({ error: 'category already exists' });
        }
        const product = await Product.create({
            name, description, price, category
        });


        return res.json(product);

    }

    async index(req, res) {
        const products = await Product.find();
        return res.json(products);
    }

    async update(req, res) {
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

    async delete(req, res) {
        const { id } = req.params;

        const product = await Product.findById(id);

        if (product) {
            return res.status(400).json({ error: 'product does exist' });
        }

        await product.remove();

        return res.status(204).send();

    }


}

export default new ProductController();