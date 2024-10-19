import React from 'react';
import CourseList from '../components/CourseList';

const Home = () => {
  const courses = [
    { id: 1, title: 'Introduction to Programming', description: 'Learn the basics of programming.' },
    { id: 2, title: 'Web Development Basics', description: 'Understand the fundamentals of web development.' },
    { id: 3, title: 'Introduction to React', description: 'Get started with React for building user interfaces.' }, // Тестовый курс
  ];

  return (
    <div>
      <h1>Welcome to the LMS</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default Home;
