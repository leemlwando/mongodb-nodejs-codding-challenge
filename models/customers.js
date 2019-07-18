const mongoose = require('mongoose');
const config = require('../database/db')
mongoose.Promise = global.Promise;
 
mongoose.connect(config.db)
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
 	Customer: [{
 		firstName: {type: String, required: true},
 		firstLast: {type: String, required: true}
 	}],
 	Car: [{

 	}]

});

module.exports = mongoose.model('Customer', CustomerSchema);