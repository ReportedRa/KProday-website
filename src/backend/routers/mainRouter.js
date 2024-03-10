const Router = require('express')
const router = new Router()

const mainController = require('../controllers/mainController')

router.get('/main', mainController.getMainGames)
router.post('/main', mainController.postNewGame)
router.get('/game/:id', mainController.getCategory)

module.exports = router;