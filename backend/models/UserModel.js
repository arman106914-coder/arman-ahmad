const mongoose = require('mongoose')

const Userschema = mongoose.Schema({
    username: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String,
        unique: true,
        lowercase: true
    },
    password: {
        require: true,
        type: String
    }
})


const User = mongoose.model('User', Userschema);
module.exports = User