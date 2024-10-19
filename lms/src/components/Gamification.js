import React from 'react';

const Gamification = ({ achievements }) => {
  return (
    <div>
      <h2>Your Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
};

export default Gamification;
