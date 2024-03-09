import express from 'express'
import router from './routers/mainRouter.js'

const PORT = process.send.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => console.log('Server start, port') + PORT)