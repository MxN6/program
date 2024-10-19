const express = require('express');
const connectDB = require('./config');
const authRoutes = require('./routes/authRoutes');
const courseRoutes = require('./routes/courseRoutes');
const progressRoutes = require('./routes/progressRoutes');
const dotenv = require('dotenv');

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json()); // Для парсинга application/json

// Подключение маршрутов
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/progress', progressRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
