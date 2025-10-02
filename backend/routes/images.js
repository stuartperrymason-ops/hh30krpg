const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
router.get('/:legion', imageController.getImagesByLegion);
module.exports = router;