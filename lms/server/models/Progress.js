const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  completedLessons: { type: Number, default: 0 },
  quizzesTaken: { type: Number, default: 0 },
  score: { type: Number, default: 0 }
});

module.exports = mongoose.model('Progress', ProgressSchema);
