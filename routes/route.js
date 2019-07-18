const express = require('express');
const app = express();
const customer_controller = require('../controllers/customers_controller');
const router = express.Router(app);


router.get('/api', customer_controller.get_customers);

router.get("/api/customer/register", customer_controller.create_customer);

router.get('/api/customer/edit', customer_controller.edit_customer);

router.get('/api/customer/delete', customer_controller.delete_customer);

module.exports = router;