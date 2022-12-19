const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');

router.route('/register').get(userController.register);
router.route('/login').post(userController.login);
router.route('/user').get(userController.users);

module.exports = router;