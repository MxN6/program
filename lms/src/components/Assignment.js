import React from 'react';

const Assignment = ({ assignment }) => {
  return (
    <div>
      <h2>{assignment.title}</h2>
      <p>{assignment.description}</p>
      {/* Добавить форму для загрузки задания */}
    </div>
  );
};

export default Assignment;
