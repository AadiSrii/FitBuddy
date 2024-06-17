// // src/components/Challenges/ChallengeForm.js
// import React, { useState } from 'react';

// const ChallengeForm = ({ onAdd }) => {
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [duration, setDuration] = useState('');
//   const [points, setPoints] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!title || !description || !duration || !points) return;

//     const newChallenge = {
//       title,
//       description,
//       duration,
//       points: parseInt(points), // Ensure points are parsed as an integer
//     };

//     onAdd(newChallenge);
//     setTitle('');
//     setDescription('');
//     setDuration('');
//     setPoints('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Enter challenge title"
//         required
//       />
//       <textarea
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         placeholder="Enter challenge description"
//         required
//       />
//       <input
//         type="text"
//         value={duration}
//         onChange={(e) => setDuration(e.target.value)}
//         placeholder="Enter challenge duration"
//         required
//       />
//       <input
//         type="number"
//         value={points}
//         onChange={(e) => setPoints(e.target.value)}
//         placeholder="Enter challenge points"
//         required
//       />
//       <button type="submit">Add Challenge</button>
//     </form>
//   );
// };

// export default ChallengeForm;

// src/components/Challenges/ChallengeForm.js
import React, { useState } from 'react';
import './ChallengeForm.css'; // Import CSS file for styling

const ChallengeForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [points, setPoints] = useState('');
  const [exercises, setExercises] = useState([{ id: 1, name: '' }]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description && duration && points && exercises.every(ex => ex.name)) {
      onAdd({ title, description, duration, points: parseInt(points, 10), exercises });
      setTitle('');
      setDescription('');
      setDuration('');
      setPoints('');
      setExercises([{ id: 1, name: '' }]);
    } else {
      alert('Please fill out all fields.');
    }
  };

  const handleExerciseChange = (index, value) => {
    const newExercises = [...exercises];
    newExercises[index].name = value;
    setExercises(newExercises);
  };

  const addExercise = () => {
    setExercises([...exercises, { id: exercises.length + 1, name: '' }]);
  };

  const removeExercise = (index) => {
    setExercises(exercises.filter((_, i) => i !== index));
  };

  return (
    <form className="challenge-form" onSubmit={handleSubmit}>
      <h3>Add New Challenge</h3>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Duration:
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
      </label>
      <label>
        Points:
        <input
          type="number"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          required
        />
      </label>
      <div className="exercises">
        <h4>Exercises</h4>
        {exercises.map((exercise, index) => (
          <div key={index} className="exercise-item">
            <input
              type="text"
              value={exercise.name}
              onChange={(e) => handleExerciseChange(index, e.target.value)}
              required
            />
            <button type="button" onClick={() => removeExercise(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={addExercise}>
          Add Exercise
        </button>
      </div>
      <button type="submit">Add Challenge</button>
    </form>
  );
};

export default ChallengeForm;

