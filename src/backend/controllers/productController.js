const {Product} = require('../models/productModel.js')
const {Op} = require('sequelize')

class productController {
    async postNewProduct(req, res) {
        const {product_id, category_id, game_id, product_cost, product_description, product_img} = req.body
        const newProduct = await Product.create({product_id, category_id, game_id, product_cost, product_description, product_img})
        res.json(newProduct)
    }
    async getProducts(req, res) {
        const id = req.params.id;
        const products = await Product.findAll({
            where: {
                game_id: id
            }
        });
        res.json(products);
    }
    async getProduct(req, res) {
        const id = req.params.id;
        const category = req.params.category;
        const product = await Product.findAll({
            where: {
                game_id: id,
                category_id: category
            }
        });
        if (product) {
            res.json(product);
        }
        else {
            res.status(404).json({ error: 'Product not found' });
        }
    }
}

module.exports = new productController()