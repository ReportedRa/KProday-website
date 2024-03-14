const {Product} = require('../models/productModel.js')

class productController {
    async postNewProduct(req, res) {
        const {product_id, category_id, game_id, product_cost, product_description, product_img} = req.body
        try {
            const newProduct = await Product.create({product_id, category_id, game_id, product_cost, product_description, product_img})
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
          res.status(404).json({ error: "Product not found" });
        }
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new productController()