const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');
const Schema = mongoose.Schema;

const userSchema = new Schema({
        name: {
            type: String,
            required: true
        },

        password: {
            type: String,
            required: true
        },

        email: {
            type: String,
            required: true
        },

        status: {
            type: Number,
            default: 0
        }
});
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id: this._id}, config.get('myPrivateKey'));
    return token;
}

function validateUser(user) {
    const email = user.email;
    const password = user.password;
    const name = user.name;

    if(email && password && name) return true;
    else return false;
    
}

module.exports.model = mongoose.model('user', userSchema);
module.exports.validate = validateUser;
