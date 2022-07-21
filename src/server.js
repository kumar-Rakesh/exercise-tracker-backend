const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const userRouter = require('./routes/users')
const exerciseRouter = require('./routes/exercises')
require('./mongoose/mongoose')


dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(cors())
app.use('/user', userRouter)
app.use('/exercise', exerciseRouter)

app.listen(PORT, () => {
    console.log(`Server started listening on ${PORT}`)
})