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

exports.completeCourse = async (req, res) => {
  const { userId, courseId } = req.body;

  try {
    let progress = await Progress.findOne({ userId, courseId });
    
    if (!progress) {
      progress = new Progress({ userId, courseId });
    }
    
    // Логика для начисления очков
    const earnedPoints = 10; // Пример: начисляем 10 баллов за завершение курса
    progress.score += earnedPoints; // Увеличиваем score

    // Обновление других полей прогресса
    progress.completedLessons += 1; // Увеличиваем количество завершенных уроков

    await progress.save();
    
    res.status(200).json(progress);
  } catch (err) {
    res.status(500).json({ message: 'Error completing course' });
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
