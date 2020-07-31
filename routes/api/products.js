var express = require('express');
var router = express.Router();
//var Users = require('../../models/users');
var Cart = require('../../models/cart');
var Product = require('../../models/product');
var Order = require('../../models/order');

//var pool = require('../../mysql_connection');

router.get('/', function(req, res, next) {
  Product.find({},function(err, products){
    if(err){
     return res.json({'success':false, 'error': err});
    }

    return res.json({'success':true, 'products': products});
  });
});

router.get('/:productId', function(req,res){
  
  var productId = req.params.productId;
   Product.findOne({'_id':productId}, function(err, product){
     if(err){
      return res.json({'success':false, 'error': err});
    }
     return res.json({'success':true, 'product': product});
   });
 });

//  router.post('/', function(req, res) {
//   Users.create(new Users({
//     username: req.body.username,
//     email: req.body.email,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name
//   }), function(err, user){
    
//     if(err){
//       return res.json({success: false, user: req.body, error: err});
//     }

//     return res.json({success: true, user: user});
    
//   });
// });

router.put('/', function(req, res){

  Product.findOne({'_id': req.body._id}, function(err, product){

   if(err) {
     return res.json({success: false, error: err});
   }

   if(product) {

    let data = req.body;

    if(data.title){
      product.title = data.title;
    };

    if(data.imagePath){
    product.imagePath = data.imagePath;
    };

    if(data.description){
    product.description = data.description;
    };

    if(data.fulldescr){
    product.fulldescr = data.fulldescr;
    };

    product.save(function(err){
      if(err){
        return res.json({success: false, error: err});
      }else{
        return res.json({success: true, product:product});
      }
    });

   }

  });
  
});

// router.delete('/:userId', function(req,res){

//   var userId = req.params.userId;

//   Users.remove({'_id':userId}, function(err,removed){

//     if(err){
//       return res.json({success: false, error: err});
//     }

//     return res.json({success: true, status: removed});

//   });

// });

module.exports = router;
