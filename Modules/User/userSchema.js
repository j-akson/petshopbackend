var mongoose = require("mongoose")
const userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },


    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    },


    city: {
        type: String,
        require: true
    },
    dateofbrith: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    pincode: {
        type: String,
        require: true
    },

    contact: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },


})
module.exports = new mongoose.model("user", userschema)
