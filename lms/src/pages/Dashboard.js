import React from 'react';
import ProgressTracker from '../components/ProgressTracker';
import Gamification from '../components/Gamification';

const Dashboard = () => {
  const progress = { completed: 2, total: 5 };
  const achievements = ['Completed Intro to Programming'];

  return (
    <div>
      <h2>Dashboard</h2>
      <ProgressTracker progress={progress} />
      <Gamification achievements={achievements} />
    </div>
  );
};

export default Dashboard;
