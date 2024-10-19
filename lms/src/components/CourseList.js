import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => {
  return (
    <div>
      <h2>Available Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>{course.title}</Link> {/* Ссылка на детали курса с параметрами */}
            <p>{course.description}</p> {/* Описание курса */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
