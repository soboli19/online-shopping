var passport = require('passport');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
     done(err, user);   
    });
});

passport.use('local.signup', new LocalStrategy({
    usernameField: 'email',
    nameField: 'name',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    let password1 = req.body.password;
    let password2 = req.body.password1;
    let name = req.body.name;
    let phone = req.body.phone;
   req.checkBody('email', 'Invalid email').notEmpty().isEmail();
   req.checkBody('password', 'Invalid password').notEmpty().isLength({min:4});
   req.checkBody('name', 'Invalid name').notEmpty().isLength({min:2});
   var errors = req.validationErrors();
   if (errors) {
        var messages = [];
        errors.forEach(function(error) {
            messages.push(error.msg);
        });
        return done(null, false, req.flash('error', messages));
   } else if (password1 !== password2) {
    return done(null, false, req.flash('error', 'Password and Confirm Password must match'));}

   User.findOne({'email': email}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (user) {
            return done(null, false, {message: 'Email is already in use'});
        }
        var newUser = new User();
        newUser.email = email;
        newUser.name = name;
        newUser.phone = phone;
        newUser.password = newUser.encryptPassword(password);
        newUser.save(function(err, result) {
            if (err) {
                return done(err);
            }
            return done(null, newUser);
        });
   });
}));

passport.use('local.signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
    req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    req.checkBody('password', 'Invalid password').notEmpty();
    var errors = req.validationErrors();
    if (errors) {
         var messages = [];
         errors.forEach(function(error) {
             messages.push(error.msg);
         });
         return done(null, false, req.flash('error', messages));
    }
    User.findOne({'email': email}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false, {message: 'No user found'});
        }
        if (!user.validPassword(password)) {
            return done(null, false, {message: 'Wrong password'});
        }
        if (!user.active) {
            return done(null, false, {message: 'Account disabled'});
        }
        return done(null, user);
        });
}));