const express = require('express');
const router = express.Router();
const UserController = require('../../app/controller/UserController');


/**
 * Create a new User
 */
router.post('/', UserController.createUser);

module.exports = router;
