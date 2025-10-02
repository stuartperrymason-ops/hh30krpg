const express = require('express');
const router = express.Router();
const questController = require('../controllers/questController');
router.get('/', questController.getAllQuests);
router.get('/:id', questController.getQuestById);
router.post('/:id/progress', questController.progressQuest);
module.exports = router;