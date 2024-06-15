// src/components/Challenges/ChallengeItem.js
import React, { useState } from 'react';

const ChallengeItem = ({ challenge, onDelete, isAdmin }) => {
  const [showExercises, setShowExercises] = useState(false);

  const toggleShowExercises = () => {
    setShowExercises(!showExercises);
  };

  return (
    <div className="challenge-item">
      <h3>{challenge.title}</h3>
      <p>{challenge.description}</p>
      <button className="show-exercises-btn" onClick={toggleShowExercises}>
        {showExercises ? 'Hide Exercises' : 'Show Exercises'}
      </button>
      {isAdmin && (
        <button className="delete-btn" onClick={() => onDelete(challenge.id)}>
          Delete
        </button>
      )}
      {showExercises && (
        <div className="exercise-list">
          <ul>
            {challenge.exercises.map(exercise => (
              <li key={exercise.id}>
                {exercise.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChallengeItem;
