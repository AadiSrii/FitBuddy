// src/components/Admin/AdminPage.js
import React, { useState, useEffect } from 'react';
import ChallengeForm from '../Challenges/ChallengeForm';
import ChallengeList from '../Challenges/ChallengeList';

const AdminPage = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    // Fetch challenges from the server or local data
    fetch('/path/to/challenges/data')
      .then(response => response.json())
      .then(data => setChallenges(data));
  }, []);

  const addChallenge = (challenge) => {
    const newChallenge = {
      id: challenges.length + 1,
      ...challenge,
    };
    setChallenges([...challenges, newChallenge]);
  };

  const deleteChallenge = (id) => {
    setChallenges(challenges.filter((challenge) => challenge.id !== id));
  };

  return (
    <div className="admin-page-container">
      <h2>Admin Panel</h2>
      <ChallengeForm onAdd={addChallenge} />
      <ChallengeList challenges={challenges} onDelete={deleteChallenge} isAdmin={true} />
    </div>
  );
};

export default AdminPage;
