const Router = require('express')
const router = new Router()

const mainRouter = require('./mainRouter.js')

router.use('/', mainRouter)

module.exports = router