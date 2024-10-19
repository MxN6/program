const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true }, // HTML или Markdown контент курса
  quizzes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }],
  assignments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Assignment' }],
});

module.exports = mongoose.model('Course', CourseSchema);
