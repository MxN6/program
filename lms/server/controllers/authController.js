// server/controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Регистрация
exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Проверка, если пользователь уже существует
    const userExists = await User.findOne({ username });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Создание нового пользователя
    const user = await User.create({ username, password });

    // Возвращаем токен
    const token = generateToken(user._id);
    res.status(201).json({ token, username: user.username });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Логин
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    // Проверка, существует ли пользователь
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Возвращаем токен
    const token = generateToken(user._id);
    res.json({ token, username: user.username });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Генерация JWT токена
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};
