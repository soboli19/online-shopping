var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    fulldescr: {type: String, required: false},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    storedisplay: {type: Boolean, default: true},
    category1: {type: Number, required: true},
    category2: {type: Number, required: true}
});

module.exports = mongoose.model('Product', schema);
