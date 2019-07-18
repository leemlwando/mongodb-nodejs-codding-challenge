const Customer =  require('../models/customers');

exports.create_customer = function(req, res){
	let customer = new Customer(req.body);
	  customer.save()
	    .then(customer => {
	      res.status(200).json({'customer': 'Customer added successfully'});
	    })
	    .catch(err => {
	    res.status(400).send("Unable to save to database");
	});
}

exports.get_customers = function(res, res){
	Customer.find((err, customers)=>{
    if(err){
      console.log(err);
    }
    else {
      res.json(customers);
    }
  });
}

exports.edit_customer = function(req, res){
		let id = '5d2e4015cce8cf43bccb6a79';
		Customer.findById(id, (err, customer)=>{
     	 res.json(customer);
  	   });
	}
exports.delete_customer = function(req, res){
	let id = '5d2e4015cce8cf43bccb6a79';
	Customer.findByIdAndRemove({_id: id}, (err, business)=>{
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
}