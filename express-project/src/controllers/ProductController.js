import Product from "../models/Product";
import Category from "../models/Category";

class ProductController {

    async store(req, res) {
        const { name, description, price, category } = req.body;

        const data = { name, description, price, category };


        const categoryExists = await Category.findById(category);

        if (!categoryExists) {
            return res.status(400).json({ error: 'Category does not found' });
        }
        const productExists = await Product.findOne(data);

        if (productExists) {
            return res.status(400).json({ error: 'Product already exists' });
        }

        const product = await Product.create({
            name, description, price, category
        });


        return res.json(product);

    }

    async index(req, res) {
        const products = await Product.find().populate('product');
        return res.json(products);
    }

    async update(req, res) {
        const { id } = req.params;
        const { name, description, price, category } = req.body;

        const product = await Product.findById(id);

        if (!product) {
            return res.status(400).json({ error: 'product does exist' });
        }

        if (name && (name !== product.name)) {
            const productExists = await Product.findOne({ name });

            if (productExists) {
                return res.status(400).json({ error: 'Product already exists' });
            }
        }

        product.name = name;
        product.price = price;
        product.description = description;
        product.category = category;

        product.save();

        return res.json(product);

    }

    async delete(req, res) {
        const { id } = req.params;

        const product = await Product.findById(id);


        if (!product) {
            return res.status(400).json({ error: 'product does exist' });
        }

        await product.remove();

        return res.status(204).send();

    }


}

export default new ProductController();