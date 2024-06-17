import React, { useState } from 'react';
import './BurnedCalories.css'; // Import CSS file with styles

function BurnedCalories() {
  const [activity, setActivity] = useState('running');
  const [duration, setDuration] = useState('');
  const [weight, setWeight] = useState('');
  const [caloriesBurned, setCaloriesBurned] = useState(null);

  // Assuming the verification token is hardcoded or fetched securely
  const verificationToken = 'your_hardcoded_verification_token';

  const calculateCalories = () => {
    const MET = getMETValue(activity);
    const caloriesPerMinute = MET * 3.5 * weight / 200;
    const totalCaloriesBurned = caloriesPerMinute * duration;
    setCaloriesBurned(totalCaloriesBurned.toFixed(2));
  };

  const addToDashboard = async () => {
    try {
      const response = await fetch('https://fitbuddy-h75f.onrender.com/api/dashboard/update', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': verificationToken
        },
        body: JSON.stringify({ caloriesBurned })
      });
      if (response.ok) {
        alert('Calories added to dashboard successfully!');
      } else {
        alert('Failed to add calories to dashboard.');
      }
    } catch (error) {
      console.error('Error adding calories to dashboard:', error);
      alert('Failed to add calories to dashboard. Please try again later.');
    }
  };

  const getMETValue = (activity) => {
    switch (activity) {
      case 'running':
        return 9.8; // MET for running at 6 mph
      case 'walking':
        return 3.5; // MET for walking at 3 mph
      case 'cycling':
        return 7.5; // MET for cycling at 10-12 mph
      case 'swimming':
        return 7.0; // MET for general swimming
      case 'yoga':
        return 2.5; // MET for yoga
      case 'weightlifting':
        return 3.0; // MET for weight lifting (moderate intensity)
      default:
        return 1.0; // Default MET
    }
  };

  return (
    <div className="App">
      <div className="calculator-container">
        <h1 className="title">Calories Burned Calculator</h1>
        <div className="input-group">
          <label>Select Activity:</label>
          <select value={activity} onChange={(e) => setActivity(e.target.value)}>
            <option value="running">Running (6 mph)</option>
            <option value="walking">Walking (3 mph)</option>
            <option value="cycling">Cycling (10-12 mph)</option>
            <option value="swimming">Swimming (general)</option>
            <option value="yoga">Yoga</option>
            <option value="weightlifting">Weight Lifting</option>
          </select>
        </div>
        <div className="input-group">
          <label>Duration (minutes):</label>
          <input type="number" value={duration} onChange={(e) => setDuration(parseInt(e.target.value) || '')} />
        </div>
        <div className="input-group">
          <label>Weight (kg):</label>
          <input type="number" value={weight} onChange={(e) => setWeight(parseInt(e.target.value) || '')} />
        </div>
        <button className="calculate-button" onClick={calculateCalories}>Calculate</button>
        {caloriesBurned !== null &&
          <div className="result">
            <h2>You burned approximately {caloriesBurned} calories.</h2>
            <button className="add-to-dashboard-button" onClick={addToDashboard}>Add to Dashboard</button>
          </div>
        }
      </div>
    </div>
  );
}

export default BurnedCalories;
