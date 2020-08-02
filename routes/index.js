var express = require('express');
var router = express.Router();

//var csrf = require('csurf');
//var passport = require('passport');
var Cart = require('../models/cart');
var Product = require('../models/product');
var Order = require('../models/order');
var User = require('../models/user');

var pool = require('../mysql_connection');

//var csrfProtection = csrf();
//router.use(csrfProtection);



/* GET home page. */
router.get('/',  function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var userAdmin = null;
    //console.log(typeof req.user.admin, ' ', req.user.admin);
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    //console.log(typeof userAdmin, ' ', userAdmin);
    //if (isAdmin(req.user)) {console.log(typeof userAdmin, ' ', userAdmin);}
    
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if (docs[i].storedisplay) {
          productselect.push(docs[i]); 
        }
    }

    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg, userAdmin: userAdmin });
  }); 
});

router.get('/zirconia98', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var userAdmin = null;
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if (docs[i].category1 == 11) {
        productselect.push(docs[i]); }
        }
    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg, userAdmin: userAdmin });
  });
});


router.get('/zirconia95', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var userAdmin = null;
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if (docs[i].category1 == 15) {
        productselect.push(docs[i]); }
        }
    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg, userAdmin: userAdmin });
  });
});

router.get('/multilayer', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var userAdmin = null;
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if (docs[i].category2 == 13) {
        productselect.push(docs[i]); }
        }
    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg, userAdmin: userAdmin });
  });
});

router.get('/HT-noshade', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var userAdmin = null;
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if ((docs[i].category1 == 11 || docs[i].category1 == 15) && docs[i].category2 == 12) {
        productselect.push(docs[i]); }
        }
    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg, userAdmin: userAdmin });
  });
});

router.get('/HT-mono-shaded', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var userAdmin = null;
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if (docs[i].category2 == 14) {
        productselect.push(docs[i]); }
        }
    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg, userAdmin: userAdmin });
  });
});

router.get('/Ivoclar', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var userAdmin = null;
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if (docs[i].category == 'Ivoclar') {
        productselect.push(docs[i]); }
        }
    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg, userAdmin: userAdmin });
  });
});

router.get('/Argen', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var userAdmin = null;
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if (docs[i].category == 'Argen') {
        productselect.push(docs[i]); }
        }
    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg, userAdmin: userAdmin });
  });
});

router.get('/Sagemax', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var userAdmin = null;
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if (docs[i].category == 'Sagemax') {
        productselect.push(docs[i]); }
        }
    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg, userAdmin: userAdmin });
  });
});

router.get('/Katana', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var userAdmin = null;
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if (docs[i].category == 'Katana') {
        productselect.push(docs[i]); }
        }
    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg, userAdmin: userAdmin });
  });
});

router.get('/Talladium', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    var userAdmin = null;
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if (docs[i].category == 'Talladium') {
        productselect.push(docs[i]); }
        }
    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks, successMsg: successMsg, noMessages: !successMsg, userAdmin: userAdmin });
  });
});

router.get('/Noritake', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  Product.find(function(err, docs){
    res.render('porcelain/noritake', { title: 'Shopping Cart'});
  });
});

router.get('/search', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var searchkey = req.query.search;  
    console.log(searchkey);
      if (searchkey.length >=3){
      pool.getConnection(function(err, connection) {
       if (err) throw err;
       console.log("MySQL Connected!");

    pool.query('SELECT * from Products WHERE Pr_Name LIKE ? OR Manufacture LIKE ? OR Description LIKE ?', ['%' +  searchkey + '%', '%' +  searchkey + '%', '%' +  searchkey + '%'], 
    function (err, result, fields){ 
      if (err) throw err;
  //  console.log(result[0].Description);
  //  console.log(result[0].sale_price);
  //  console.log(result.length); 
      res.render('search/search', { title: 'Search old DB',  result: result, searchkey: searchkey});
      connection.release();
      });
     //  connection.release();
    });
   }
    else {
    res.render('search/search', { title: 'Shopping Cart',  searchmsg: 'поисковое слово не может быть менее 3 букв', searchkey: searchkey});
   }
});

router.get('/misc', function(req, res, next) {
    return res.render('misc/misc',{ title: 'Shopping Cart'});
});

router.get('/3D', function(req, res, next) {
    var successMsg = req.flash('success')[0];
    Product.find({category: "3D"},function(err, docs){
      var userAdmin = null;
    if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    }
    var productselect= [];
    var  productChunks= [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i ++ ) {
        if (docs[i].category == '3D') {
        productselect.push(docs[i]); }
        }
    for (var j = 0; j < docs.length; j += chunkSize) {
        productChunks.push(productselect.slice(j, j + chunkSize));
    }    
    return res.render('shop/index',{ title: '3D Материалы', products: productChunks, successMsg: successMsg, noMessages: !successMsg,userAdmin: userAdmin});
 });
});

router.get('/logon', function(req, res, next) {
    return res.render('proc/logon',{ title: 'Shopping Cart'});
});

router.get('/add-to-cart/:id/:size/:color', function(req, res, next) {
    var productId = req.params.id,
        productSize = req.params.size,
        productColor = req.params.color;
    //console.log(productId);
    //console.log(productColor);

    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
      if (err) {
        return res.redirect('/');
      }
      
        let prSize = parseInt(productSize,10);
        //console.log(prSize);
        if (isNaN(prSize)){ prSize= product.size[0]};
        console.log(prSize);

        for (var i = product.size.length -1; i >= 0 ; i--){
          if (product.size[i] !== prSize) {
          product.size.splice(i, 1);
          product.price.splice(i, 1);
          // break;
         }
        }
         
         //console.log(productColor);
         //console.log(productColor == undefined);
         for (var i =  product.color.length -1; i >=0; i--) {
          if (product.color[i] !== productColor) {
         product.color.splice(i, 1);
         //break;
        }
      }
      
      // console.log(product.size);
      // console.log(product.color);
      // console.log(typeof product.price[0]);

      cart.add(product, product.id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.redirect('/');
    });
});

router.get('/remove/:id', function(req, res, next) {
   var productId = req.params.id;
   var cart = new Cart(req.session.cart ? req.session.cart : {});
   cart.removeItem(productId);
   req.session.cart = cart;
   res.redirect('/shopping-cart');
});

router.get('/increase/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.increaseByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/reduce/:id', function(req, res, next) {
  var productId = req.params.id;
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  cart.reduceByOne(productId);
  req.session.cart = cart;
  res.redirect('/shopping-cart');
});

router.get('/shopping-cart', function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart', {products: null});
  }
    var cart = new Cart(req.session.cart);
    res.render('shop/shopping-cart', {products: cart.generateArray(), totalPrice: cart.totalPrice});
});  

router.get('/checkout', isLoggedIn, function(req, res, next) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart');
  }
    var cart = new Cart(req.session.cart);
    res.render('shop/checkout', {total: cart.totalPrice});
});

router.post('/checkout', isLoggedIn, function(req, res) {
  if (!req.session.cart) {
    return res.render('shop/shopping-cart');
  }
  var cart = new Cart(req.session.cart);
  var order = new Order({
    user: req.user,
    cart: cart,
    address: req.body.address,
    name: req.body.name,
    paymentinfo: req.body.payinfo,
    comment: req.body.comment
  });
  console.log(order);
  order.save(function(err, result) {
    if (err) console.log(err.stack);
    req.flash('success', 'Successfully bought product!');
    req.session.cart = null;
    res.redirect('/');
  });
});    

router.get('/contact', function(req, res, next) {
    return res.render('contact/contact');
});

router.get('/users', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var userAdmin = null;
  if (req.isAuthenticated() && (req.user.admin == 1)) {
    userAdmin = true;
    User.find(function(err, users){
      if(err) {
        return res.json({success: false, error: err});
      }

    return res.render('user/users', { title: 'Users', users: users, successMsg: successMsg, noMessages: !successMsg,userAdmin: userAdmin});
    });
  }
  else {
    return res.redirect("/");
  }
  
});

router.get('/edit-user/:id', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var userAdmin = null;
  if (req.isAuthenticated() && (req.user.admin == 1)) {
    userAdmin = true;
    console.log( 'user is Admin =',  userAdmin);
    successMsg = 'user is Admin';
    var userId = req.params.id;
    
    User.findOne({'_id': userId},function(err, user){
      if (err) {
        return done(err);
      }
      else {
        return res.render('user/edit-user', {user: user});
      }
    });
  }
  else {
    return res.redirect("/");
  }
});

router.post('/edit-user',  function (req, res) {
  var successMsg = req.flash('success')[0];
  var userAdmin = null;
  if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      //console.log( 'user is Admin =',  userAdmin);
      //successMsg = 'user is Admin';
    
    
    User.findOne({'_id': req.body._id},function(err, user){ 
    //console.log(user) 
    if(err) {
      return res.json({success: false, error: err});
    }
    // if (product) {
    // let data = req.body;
    // };

    if(req.body.name){
      user.name = req.body.name;
    };

    if(req.body.phone){
      user.phone = req.body.phone;
    };
    if(req.body.active){
    user.active = req.body.active;
    };
    
    if(req.body.admin){
      user.admin = req.body.admin;
    };

    //user.save().then(function(err, user){
      user.save(function(err, user){
      if(err){
        //console.error(err.stack)
        console.log(JSON.stringify(err))
        return res.json({success: false, error: err});
      }else{
        req.flash('success', 'Successfully edited user!');
        //return res.json({success: true, user: user});
        return res.redirect("/");
      }
    });
  });
  }
  else { alert('Edit: user is NOT admin');
  return res.redirect("/");}
});

router.get('/edit-product/:id', function(req, res, next) {
  var successMsg = req.flash('success')[0];
  var userAdmin = null;
  if (req.isAuthenticated() && (req.user.admin == 1)) {
    userAdmin = true;
    console.log( 'user is Admin =',  userAdmin);
    successMsg = 'user is Admin';
    var productId = req.params.id;
    console.log(productId);
    
    Product.findOne({'_id': productId},function(err, product){
      if (err) {
        return done(err);
      }
      else {
        return res.render('edit-product', {product: product});
      }
    });
  }
  else {
    return res.redirect("/");
  }
});

router.post('/edit-product',  function (req, res) {
  var successMsg = req.flash('success')[0];
  var userAdmin = null;
  if (req.isAuthenticated() && (req.user.admin == 1)) {
      userAdmin = true;
      console.log( 'user is Admin =',  userAdmin);
      successMsg = 'user is Admin';
    
    
    Product.findOne({'_id': req.body._id},function(err, product){
    console.log(typeof req.body.price) 
    console.log(product.price) 
    if(err) {
      return res.json({success: false, error: err});
    }
    // if (product) {
    // let data = req.body;
    // };

    if(req.body.title){
      product.title = req.body.title;
    };

    if(req.body.description){
    product.description = req.body.description;
    };

    // let result = []
    // result = req.body.price.map(v => parseInt(v, 10)); // convert string array to number array
    // let checkNan = false
    // for (i=0; i<result.length; i++) {
    // if (isNaN(result[i])){ checkNan = true};}
    let testernull = false
    for (i=0; i<req.body.price.length; i++) {
      if(req.body.price[i] === "" || req.body.price[i] == null) 
      //if (Array.isArray(req.body.price) || !req.body.price.length) 
       { testernull == true
        product.price = product.price;}  // if (isNaN(result[i])){ checkNan = true};}                                       
      else {product.price =  req.body.price;};  
    }                
    console.log('testernull-',testernull)       
    console.log(product.price)

    if(req.body.size){
    product.size = req.body.size;
    };

    if(req.body.color){
    product.size = req.body.color;
    };

    if(req.body.storedisplay){
      product.storedisplay = req.body.storedisplay;
    };

    //product.save().then(function(err){
      product.save(function(err){
      if(err){
        return res.json({success: false, error: err});
      }else{
        //return res.json({success: true, product:product});
        return res.redirect("/");
      }
    });
  });
  }
  else { console.log('Edit: user is NOT admin');
  return res.redirect("/");}
});
 

module.exports = router;

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
      return next();
  }
  req.session.oldUrl = req.url;
  res.redirect('/user/signin');
}

function isAdmin(req, res, next) {
  //var userAdmin = null;
  if (req.isAuthenticated() && (req.user.admin === 1)) {
      console.log('user is admin:',req.user.admin);
      userAdmin = true;
      return next();
  }
  //return res.redirect(403, "/error");
  console.log('user is NOT admin');
  return next();
}
