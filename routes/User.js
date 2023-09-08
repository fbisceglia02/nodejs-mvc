const express = require("express");
const router = express.Router()
const userController = require('../controllers/UserController')
// post request to a User
router.get('/', userController.get);

module.exports = router;