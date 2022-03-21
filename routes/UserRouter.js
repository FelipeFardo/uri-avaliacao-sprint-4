const express = require('express');
const router = express.Router();

const UserController = require('../controller/UserController');

router.get('/', UserController.list);
router.post('/', express.json(), UserController.save);
router.post('/login', express.json(), UserController.login);

module.exports = router;