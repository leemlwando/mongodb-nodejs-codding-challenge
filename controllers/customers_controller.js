const Customer =  require('../models/customers');

exports.create_customer = function(req, res){
	let custo = new Customer({
		   customer: [			
		    {firstName: req.body.firstName},
			{lastName: req.body.lastName},
			{DOB: req.body.DOB},
			{email: req.body.email},
			{phoneNumber: req.body.phoneNumber}
			]  

	});
	console.log(JSON.stringify(custo))
	  custo.save()
	    .then(customer => {
	      res.status(200).json({'customer': 'Customer added successfully'});
	    })
	    .catch(err => {
	    res.status(400).send(err.message);
	});
}
// , 
// 		car:[
// 		    {make: "Toyota"}, 
// 			{model: "UID"}, 
// 			{year: Date()}, 
// 			{owner: "Mathews"}
// 			] 
exports.get_customers = function(res, res){
	Customer.find((err, customers)=>{
		res.json(customers);
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