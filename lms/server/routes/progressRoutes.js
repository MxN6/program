const express = require('express');
const { getProgress, completeCourse, updateProgress, enrollInCourse } = require('../controllers/progressController');
const router = express.Router();

router.get('/:userId', getProgress);
router.put('/:userId', updateProgress);
router.post('/add', completeCourse);

module.exports = router;
