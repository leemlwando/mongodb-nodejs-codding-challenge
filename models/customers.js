const mongoose = require('mongoose');
const validator = require('validator');
const config = require('../database/db');
mongoose.Promise = global.Promise;
 
mongoose.connect(config.db, { useNewUrlParser: true })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
 	  customer: [		{firstName: {type: String, required: 'Enter first name'}},
 		{lastName: {type: String, required: 'Enter last name'}},
 		{DOB:{type: Date, required: 'Enter date od birth'}}, 
 		{email:{type:String,
				validate:{
      					validator: validator.isEmail,
      					message: "Not a valid email address",
      					isAsync: false
   				 }
		}},
 		{phoneNumber: {type: Number, required: 'Enter phone number'}}]

 	
});

module.exports = mongoose.model('Customer', CustomerSchema);