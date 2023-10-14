const express = require('express');
const router = express.Router();

/* Get New Message Form */
router.get('/', function (req, res) {
  res.render('form');
});

module.exports = router;
