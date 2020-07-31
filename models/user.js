var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var uniqueValidator = require('mongoose-unique-validator');
//var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcrypt-nodejs'); //csurf

var userSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: [true, 'Email must be unique']
    },
    name: {type: String},
    phone: {type: String},
    // username: {
    //     type: String,
    //     required: [true, 'Please enter a username'],
    //     unique: [true, 'Usernames must be unique']
    // },
        password: {type: String, required: true},
    
    admin: {
        type: Boolean,
        default: false ,
        created: {
        type: Date,
        default: Date.now
        },
        modified: {
        type: Date,
        default: Date.now
        }
    },
    created: {
        type: Date,
        default: Date.now
    },

    active: {type: Boolean,
        default: true ,
        modified: {
            type: Date,
            default: Date.now
        }
    }
});

userSchema.methods.encryptPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', userSchema);