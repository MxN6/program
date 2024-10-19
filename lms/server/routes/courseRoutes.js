const express = require('express');
const { getCourses, getCourseById,entercourse } = require('../controllers/courseController');
const router = express.Router();

router.get('/', getCourses);
router.get('/courses/:id', getCourseById);
router.get('/course/:id', entercourse);

module.exports = router;
