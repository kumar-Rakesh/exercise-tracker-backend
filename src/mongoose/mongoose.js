const { connect, connection } = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.join(__dirname, "../../config/.env") })

const uri = process.env.DB_URI

connect(uri, null)

connection.once('open', () => {
    console.log('DB Connection Successful!!')
})