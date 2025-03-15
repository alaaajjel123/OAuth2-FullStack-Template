const express = require('express');
const UserController = require('../controllers/userController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

const router = express.Router();

router.get('/profile', jwtMiddleware, UserController.getProfile);
router.put('/update-username', jwtMiddleware, UserController.updateUsername);

module.exports = router;