import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { addPoints } from '../services/progressService'; // Импортируем сервис для работы с прогрессом

const CourseDetail = () => {
  const { id } = useParams(); // Получаем ID курса из URL
  const location = useLocation(); // Получаем информацию о текущем местоположении
  const [course, setCourse] = useState(null);

  // Пример данных курсов (можно заменить на запрос к API)
  const courses = [
    { id: 1, title: 'Introduction to Programming', description: 'Learn the basics of programming.' },
    { id: 2, title: 'Web Development Basics', description: 'Understand the fundamentals of web development.' },
    { id: 3, title: 'Introduction to React', description: 'Get started with React for building user interfaces.' }, // Тестовый курс
  ];

  useEffect(() => {
    // Ищем курс по ID
    const foundCourse = courses.find(c => c.id === parseInt(id));
    setCourse(foundCourse);

    // Проверяем наличие параметра enroll в URL
    const queryParams = new URLSearchParams(location.search);
    if (queryParams.get('enroll') === 'true') {
      handleEnroll(); // Автоматически записываем на курс
    }
  }, [id, location]);

  const handleEnroll = async () => {
    // Вызов функции для увеличения баллов
    await addPoints.completeCourse(id);
    alert('You have successfully enrolled in the course!');
  };

  if (!course) {
    return <p>Course not found!</p>; // Если курс не найден
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button onClick={handleEnroll}>Enroll</button> {/* Кнопка для записи на курс */}
    </div>
  );
};

export default CourseDetail;
