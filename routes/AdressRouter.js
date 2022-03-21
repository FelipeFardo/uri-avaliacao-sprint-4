const express = require('express');
const router = express.Router();

const AdressController = require('../controller/AdressController');

router.get('/', AdressController.list);
router.post('/', express.json(), AdressController.save);

module.exports = router;