const mongoose = require('mongoose');
const validator = require('validator');
const config = require('../database/db');
mongoose.Promise = global.Promise;
 
mongoose.connect(config.db, { useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

const Schema = mongoose.Schema;
const CarSchema = new Schema({

 	car: [
 		{make: 	{type: String, required: true}}, 
 		{model: 	{type: String, required: true}}, 
 		{year: 	{type: Date}}, 
 		{owner:  {type: String}}
 	  ]

});

module.exports = mongoose.model('Car', CarSchema);