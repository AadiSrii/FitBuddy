// src/components/Challenges/ChallengeList.js
import React, { useState } from 'react';
import ChallengeItem from './ChallengeItem';
import './ChallengeList.css'; // Import CSS file for styling

const ChallengeList = ({ challenges, onDelete, isAdmin }) => {
  const [expandedChallengeId, setExpandedChallengeId] = useState(null);

  const toggleExercises = (id) => {
    if (expandedChallengeId === id) {
      setExpandedChallengeId(null);
    } else {
      setExpandedChallengeId(id);
    }
  };

  return (
    <div className="challenge-list-container">
      {challenges.map(challenge => (
        <ChallengeItem
          key={challenge.id}
          challenge={challenge}
          onDelete={onDelete}
          isAdmin={isAdmin}
          onShowExercises={toggleExercises}
        />
      ))}
    </div>
  );
};

export default ChallengeList;
