const express = require('express');
const router = express.Router();
const npcController = require('../controllers/npcController');
router.get('/', npcController.getAllNPCs);
router.get('/:id', npcController.getNPCById);
module.exports = router;