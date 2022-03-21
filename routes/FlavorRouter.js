const express = require('express');
const router = express.Router();

const FlavorController = require('../controller/FlavorController');

router.get('/', FlavorController.list);
router.post('/', express.json(), FlavorController.save);

module.exports = router;