import Router from 'express'
import {newGame, mainGames, pageGames, category, topGame} from '../controllers/mainController.js'
const router = new Router()

router.get('/main', mainGames)
router.get('/game/:id', pageGames)
router.get('/game/:id', category)
router.get('/game/:id', topGame)
router.post('/main', newGame)

export default router 