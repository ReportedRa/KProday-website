const {Product} = require('../models/productModel.js')
const setupAssociations = require('../models/associateModel.js')

class productController {
    async postNewProduct(req, res) {
        const {category_id, game_id, product_cost, product_description, product_img} = req.body
        try {
            const newProduct = await Product.create({ category_id, game_id, product_cost, product_description, product_img})
        res.json(newProduct)
        } catch (error) {
            res.status(400).json({error: error.message})
        }
        
    }
    async getProducts(req, res) {
        const id = req.params.id;
        try {
            const products = await Product.findAll({
                where: {
                    game_id: id
                }
            });
            res.json(products);
        } catch (error) {
            res.status(400).json({error: error.message})
        }
    }
    async getProduct(req, res) {
    const id = req.params.id;
    const category = req.params.category;
    try {
      if (id && category) {
        const product = await Product.findAll({
          where: {
            game_id: id,
            category_id: category,
          },
        });
        if (product) {
          res.json(product);
        } else {
          res.status(404).json({ error: "Товар не найден" });
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getCartProducts(req, res) {
    const { user_id } = req.body;
    setupAssociations()
    try {
        const product = await Product.findAll({
            where: { user_id: user_id},
            attributes: ['product_cost', 'product_description'],
        });
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ error: 'Товары не найден' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Произошла ошибка при извлечении данных о продуктах' });
    }
  }
  async getToCart(req, res) {
    const {user_id, product_id} = req.body
    if (product_id == null){
      res.json({message: 'product_id не указан'})
    }
    else {
      try {
        const cart = await Product.update(
          {
            "user_id": user_id
          },
          {where: {product_id: product_id}}
      )
      res.json({message: 'Товар добавлен в корзину'})
      }
      catch (error) {
        res.json({error: error.message})
      }
    }
  }
}

module.exports = new productController()