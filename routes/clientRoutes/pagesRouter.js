const express = require('express');
const router = express.Router();
const { getCampgrounds } = require('../../controllers/browserController');
router
.get('/', (req, res) => {
  res.render('index');
})
.get('/campgrounds', getCampgrounds)

module.exports = router;