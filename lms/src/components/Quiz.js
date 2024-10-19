import React from 'react';

const Quiz = ({ questions }) => {
  return (
    <div>
      <h2>Quiz</h2>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
          {/* Опции ответа и логика будут добавлены позже */}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
