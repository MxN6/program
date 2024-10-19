import React from 'react';

const CourseDetail = ({ course }) => {
  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <button>Enroll</button>
    </div>
  );
};

export default CourseDetail;
