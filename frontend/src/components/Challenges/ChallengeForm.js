// src/components/Challenges/ChallengeForm.js
import React, { useState } from 'react';

const ChallengeForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [points, setPoints] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !duration || !points) return;

    const newChallenge = {
      title,
      description,
      duration,
      points: parseInt(points), // Ensure points are parsed as an integer
    };

    onAdd(newChallenge);
    setTitle('');
    setDescription('');
    setDuration('');
    setPoints('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter challenge title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter challenge description"
        required
      />
      <input
        type="text"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Enter challenge duration"
        required
      />
      <input
        type="number"
        value={points}
        onChange={(e) => setPoints(e.target.value)}
        placeholder="Enter challenge points"
        required
      />
      <button type="submit">Add Challenge</button>
    </form>
  );
};

export default ChallengeForm;
