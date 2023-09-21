const mongoose = require('mongoose');
const validator = require('validator');
 const userModel = new mongoose.Schema({
    firstName: {
        type: String,
        require: true,
        minlength: 3
    },
    lastName: {
        type: String,
        require: true,
        minlength: 3
    },
    email: {
        type: String,
        unique:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
         }   
        }
    }
 });

module.exports = userModel;
