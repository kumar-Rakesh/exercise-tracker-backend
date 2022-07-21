const { Schema, model } = require('mongoose')

const schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minLength: 3
    }
}, { timestamps: true })

const User = model('User', schema)

module.exports = User