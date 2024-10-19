const Progress = require('../models/Progress');

// Получение прогресса пользователя
exports.getProgress = async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.params.userId }).populate('courseId');
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Обновление прогресса пользователя
exports.updateProgress = async (req, res) => {
  try {
    const progress = await Progress.findOneAndUpdate(
      { userId: req.params.userId, courseId: req.body.courseId },
      req.body,
      { new: true, upsert: true } // Создает, если не найден
    );
    res.status(200).json(progress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
