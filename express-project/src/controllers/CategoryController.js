import { json } from 'express';
import Category from '../models/Category';

class CategoryController {

    async index(req, res) {
        const categories = await Category.find({});
        return res.json(categories);
    }

    //criar uma nova categoria
    async store(req, res) {

        const { name } = req.body;

        const category = await Category.create({ name });

        return res.json(category);
    }

    //atualizar
    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(400).json({ error: 'Category does not found' });
        }
        category.name = name;
        await category.save();
        return res.json(category);

    }
}

export default new CategoryController();

