const express = require('express');
const { getProgress, updateProgress } = require('../controllers/progressController');
const router = express.Router();

router.get('/:userId', getProgress);
router.put('/:userId', updateProgress);

module.exports = router;
