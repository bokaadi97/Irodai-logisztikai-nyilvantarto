const mongoose = require("mongoose");
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

module.exports = function() {
    return function(req, res, next) {
       if(!req.isAuthenticated()){
           res.redirect("/login");
       }

        next();
    };
};