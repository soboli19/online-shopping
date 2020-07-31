var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Order = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    cart: {type: Object, required: true},
    address: {type: String, required: true}, 
    name: {type: String, required: true},
    paymentinfo: {type: String, required: true}, // type: Number
    comment: {type: String, required: false},
    orderdate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Order', Order);