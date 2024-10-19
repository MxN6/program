import React from 'react';
import CourseDetail from '../components/CourseDetail';

const Course = () => {
  const course = { title: 'Introduction to Programming', description: 'Learn the basics of programming.' };

  return (
    <div>
      <CourseDetail course={course} />
    </div>
  );
};

export default Course;
