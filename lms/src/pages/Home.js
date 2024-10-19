import React from 'react';
import CourseList from '../components/CourseList';

const Home = () => {
  const courses = [
    { id: 1, title: 'Introduction to Programming' },
    { id: 2, title: 'Web Development Basics' },
  ];

  return (
    <div>
      <h1>Welcome to the LMS</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default Home;
