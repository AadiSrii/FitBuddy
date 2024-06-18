import React from 'react';

const WorkoutPlan = ({ name, description }) => {
  return (
    <div className="workout-plan">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default WorkoutPlan;
