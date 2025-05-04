const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController.js');

router.get('/', messageController.getHomePage);
router.post('/new', messageController.addNewMessage);

module.exports = router;
