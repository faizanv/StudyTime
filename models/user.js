var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	first: String,
	last: String,
	email : String
});

var User = mongoose.model('User',UserSchema);

var userMethods = {};

userMethods.add = function(body, callback) {
	var newUser = new User(body);
	newUser.save(callback);
};

userMethods.get = function(body, callback) {
	User.findOne(body, callback);
};

userMethods.update = function(old,updated, callback) {
	User.findOneAndUpdate(old, updated, callback);
};

userMethods.remove = function(body, callback) {
	User.findOneAndRemove(body, callback);
};

module.exports = userMethods;
