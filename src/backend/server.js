require('dotenv').config()
const express = require('express')
const sequelize = require('./db.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const router = require('./routers/index.js')

const PORT = process.env.PORT || 8000

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())
app.use(express.json())
app.use('/api', router)


const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log('SERVER START, PORT ' + PORT))
    }
    catch (e) {
        console.log(e)
    }
}
start()