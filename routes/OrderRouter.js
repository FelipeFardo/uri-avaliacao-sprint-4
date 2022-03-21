const express = require('express');
const router = express.Router();

const OrderController = require('../controller/OrderController');

router.get('/', OrderController.list);
router.post('/', express.json(), OrderController.save);

module.exports = router;