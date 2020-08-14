var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var validator = require('express-validator');
var MongoStore = require('connect-mongo')(session);

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var apiProductsRouter = require('./routes/api/products');

var app = express();


//var flash = require('connect-flash-plus');

var config = require('./config.dev');

//mongoose.connect(config.mongodb, {useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connect(config.mongodb, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },function(err){
  var admin = new mongoose.mongo.Admin(mongoose.connection.db);
  admin.buildInfo(function (err, info) {
   console.log("connection succesfull MongoDB version",info.version);
  });
});
require('./config/passport');

//mongoose.connect('localhost:27017/shopping');

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(logger('dev'));
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));  //??
app.use(bodyParser.json());
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysupersecret', 
  resave: false, 
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection}),
  cookie: { maxAge: 180*60*1000} //3 hrs
}));
// app.use(function (req, res, next) {      //access to session within handlebars
//     res.locals.session = req.session;
//     next();
// });
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    //res.locals.session = req.session;            //access to session within handlebars
    res.locals.login = req.isAuthenticated();
    res.locals.session = req.session;
    next();
});

//Set up CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  if ('OPTIONS' == req.method) {
    res.send(200);
  } else {
    next();
  }
});

app.use('/user', userRouter);
app.use('/', indexRouter);
app.use('/api/products', apiProductsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
