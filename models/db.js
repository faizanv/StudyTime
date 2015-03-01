var mongoose = require('mongoose');
var MONGO_URL = process.env.MONGO_URL || 'mongodb://studytime:studytime@ds050087.mongolab.com:50087/study-time';

mongoose.connect(MONGO_URL);
var DB = mongoose.connection;
DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', function() {});

var DBMethods = {
  user: require('./user'),
  card: require('./card'),
};

module.exports = DBMethods;
