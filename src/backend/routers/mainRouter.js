const Router = require('express')
const router = new Router()

const mainController = require('../controllers/mainController')
const productController = require('../controllers/productController')

router.get('/main', mainController.getMainGames)
router.post('/main', mainController.postNewGame)
router.get('/game/:id', mainController.getCategory)
router.get('/game/:id/:category', productController.getProduct)
router.get('/products/:id', productController.getProducts)
router.post('/game', productController.postNewProduct)


module.exports = router;