import React from 'react';

const ProgressTracker = ({ progress }) => {
  return (
    <div>
      <h2>Your Progress</h2>
      <p>Completed Courses: {progress.completed}</p>
      <p>Total Courses: {progress.total}</p>
    </div>
  );
};

export default ProgressTracker;
