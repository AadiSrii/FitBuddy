// src/components/Challenges/ChallengePage.js
import React, { useState, useEffect } from 'react';
import ChallengeList from './ChallengeList';
import challengesData from '../../data/challengeData';

const ChallengePage = () => {
  const [challenges, setChallenges] = useState([]);

//   useEffect(() => {
//     fetch('/src/data/challengeData')
//       .then(response => response.json())
//       .then(data => setChallenges(data));
//   }, []);
  useEffect(() => {
    // Simulating fetching data from challengesData file
    setChallenges(challengesData);
  }, []);

  return (
    <div>
    <div className='head'>
        <h1>CHALLENGE YOURSELF</h1>
        <p>Participate in challenges to set goals, motivate yourself, and cheer on your friends. Prizes are given for certain challenges, so don't wait—join a challenge today!</p>
    </div>
    <div className="challenge-page-container">
      {/* <h2>Challenges</h2> */}
      <ChallengeList challenges={challenges} isAdmin={false} />
    </div>
    </div>
  );
};

export default ChallengePage;

  