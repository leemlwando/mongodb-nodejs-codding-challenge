const express = require('express');
const app = express();
const customer_controller = require('../controllers/customers_controller');
const router = express.Router(app);


router.get('/api', customer_controller.get_customers);

router.post("/api/customer/register", customer_controller.create_customer);

router.put('/api/customer/edit', customer_controller.edit_customer);

router.delete('/api/customer/delete', customer_controller.delete_customer);

module.exports = router;