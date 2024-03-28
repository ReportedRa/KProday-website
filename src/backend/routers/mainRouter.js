const Router = require('express')
const router = new Router()

const mainController = require('../controllers/mainController')
const productController = require('../controllers/productController')
const userController = require('../controllers/userController')

router.get('/main', mainController.getMainGames)
router.post('/main', mainController.postNewGame)
router.get('/game/:id', mainController.getCategory)
router.get('/game/:id/:category', productController.getProduct)
router.get('/products/:id', productController.getProducts)
router.post('/game', productController.postNewProduct)
router.post('/user', userController.createNewUser)
router.get('/users', userController.getAllUsers)
router.post('/account', userController.getOneUser)
router.post('/login', userController.getUserAndCheckPassword)
router.post('/user/update-password', userController.updatePassword)
router.post('/user/cart', productController.getCartProducts)
router.post('/user/cart/add', productController.getToCart)


module.exports = router;