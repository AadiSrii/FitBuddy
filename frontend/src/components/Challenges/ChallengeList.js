import React, { useState } from 'react';
import ChallengeItem from '../Challenges/ChallengeItem';
import './ChallengeList.css';

const ChallengeList = ({ challenges }) => {
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
          key={challenge._id}
          challenge={challenge}
          onShowExercises={toggleExercises}
        />
      ))}
    </div>
  );
};

export default ChallengeList;
