import React, { useState, useEffect } from 'react';
import ChallengeList from '../Challenges/ChallengeList';
import { Footer } from '../../pages/Footer';

const ChallengePage = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    fetch('https://fitbuddy-h75f.onrender.com/api/admin/challenges')
      .then(response => response.json())
      .then(data => setChallenges(data.challenge))
      .catch(error => console.error('Error fetching challenges:', error));
  }, []);

  return (
    <div>
      <div className='head'>
        <h1>CHALLENGE YOURSELF</h1>
        <p>Participate in challenges to set goals, motivate yourself, and cheer on your friends. Prizes are given for certain challenges, so don't wait—join a challenge today!</p>
      </div>
      <div className="challenge-page-container">
        <ChallengeList challenges={challenges} />
      </div>
      <Footer />
    </div>
  );
};

export default ChallengePage;
