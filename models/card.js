var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;


var CardSchema = new Schema({
    username: { type: String, unique: true},
    author: String,
    title: String,
    body: String
});

var Card = mongoose.model('Card',CardSchema); //creating database collection(table)

var cardMethods = {};

cardMethods.add = function(body, callback) {
    var newCard = new Card(body);
    newCard.save(callback);
};

cardMethods.get = function(body, callback) {
    Card.find(body, callback);
};

cardMethods.update = function(old, updated, callback) {
    Card.findOneAndUpdate(old, updated, callback);
};

cardMethods.remove = function(body, callback) {
    Card.findOneAndRemove(body, callback);
};

module.exports = cardMethods;
