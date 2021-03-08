import { json } from 'express';
import Category from '../models/Category';

class CategoryController {

    //listar todas as categorias
    async index(req, res) {
        const categories = await Category.find();
        return res.json(categories);
    }

    //criar uma nova categoria
    async store(req, res) {

        const { name } = req.body;

        const categoryExists = await Category.findOne({ name });

        if (categoryExists) {
            return res.status(400).json({ error: 'category already exists' });
        }

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
        if (name && (category !== category.name)) {
            const categoryExists = await Category.findOne({ name });

            if (categoryExists) {
                return res.status(400).json({ error: 'category already exists' });
            }
        }
        category.name = name;
        await category.save();
        return res.json(category);

    }

    async delete(req, res) {
        const { id } = req.params;

        const category = await Category.findById(id);

        if (!category) {
            return res.status(400).json({ erro: 'Category does not found' })
        }

        await category.remove();

        return res.status(204).send();

    }
}

export default new CategoryController();

