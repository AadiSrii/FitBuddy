import React, { useState } from 'react';
import axios from 'axios';
import './NutritionCalculator.css';

const NutritionCalculator = () => {
  const [foodName, setFoodName] = useState('');
  const [nutritionData, setNutritionData] = useState([]);
  const [error, setError] = useState('');
  const [caloriesIntake, setCaloriesIntake] = useState(null);

  // Example token, replace with your actual token handling logic
  const verificationToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YzMzZTZmM2NhMWExYTMwNjYzMGNkIiwidXNlcm5hbWUiOiJUdXNoYXIgQmlzaHQiLCJlbWFpbCI6InR1c2hhcmJpc2h0MDIxNkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNzE4MzY3MjA2LCJleHAiOjE3MTg1NDcyMDZ9.6XgeiLRucXUFYiaKZnGVKArxHRADr32Zlg_IRM7AC5E";

  const handleChange = (e) => {
    setFoodName(e.target.value);
  };

  const fetchNutritionData = async () => {
    try {
      const response = await axios.get(`https://api.api-ninjas.com/v1/nutrition?query=${foodName}`, {
        headers: { 'X-Api-Key': 'eB4OXzifHLlkduM+zBRDbg==2aO8Idqe2DeeBv1u' },
      });
      setNutritionData(response.data);
      setError('');
    } catch (err) {
      setError('Could not fetch nutrition data. Please try again.');
      setNutritionData([]);
    }
  };

  const addToDashboard = async (calories) => {
    try {
      const response = await axios.post('https://fitbuddy-h75f.onrender.com/api/dashboard/update ', {
        caloriesIntake: calories
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': verificationToken
        }
      });
      if (response.status === 200) {
        alert('Calories intake added to dashboard successfully!');
      } else {
        alert('Failed to add calories intake to dashboard.');
      }
    } catch (error) {
      console.error('Error adding calories intake to dashboard:', error);
      alert('Failed to add calories intake to dashboard. Please try again later.');
    }
  };

  const addNutritionToDashboard = async (nutritionItem) => {
    try {
      const response = await axios.post('https://fitbuddy-h75f.onrender.com/api/auth/nutrition', {
        nutritionItem: nutritionItem
      }, {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': verificationToken
        }
      });
      if (response.status === 200) {
        alert('Nutrition added to dashboard successfully!');
      } else {
        alert('Failed to add nutrition to dashboard.');
      }
    } catch (error) {
      console.error('Error adding nutrition to dashboard:', error);
      alert('Failed to add nutrition to dashboard. Please try again later.');
    }
  };

  const handleAddToDashboard = () => {
    if (caloriesIntake) {
      addToDashboard(caloriesIntake);
    } else {
      alert('Please calculate nutrition information first.');
    }
  };

  return (
    <div className="nutrition-container">
      <h1 className="title">Nutrition Calculator</h1>
      <div className="input-group">
        <label>Food Name:</label>
        <input
          type="text"
          value={foodName}
          onChange={handleChange}
          placeholder="Enter food name (e.g., 2 eggs)"
        />
      </div>
      <button className="calculate-button" onClick={fetchNutritionData}>Get Nutrition Info</button>
      {error && <div className="error">{error}</div>}
      {nutritionData.length > 0 && (
        <div className="result">
          <h2>Nutrition Information:</h2>
          {nutritionData.map((item, index) => (
            <div key={index} className="nutrition-item">
              <h3>{item.name}</h3>
              <p>Calories: {item.calories}</p>
              <p>Serving Size: {item.serving_size_g} g</p>
              <p>Total Fat: {item.fat_total_g} g</p>
              <p>Saturated Fat: {item.fat_saturated_g} g</p>
              <p>Protein: {item.protein_g} g</p>
              <p>Sodium: {item.sodium_mg} mg</p>
              <p>Potassium: {item.potassium_mg} mg</p>
              <p>Cholesterol: {item.cholesterol_mg} mg</p>
              <p>Total Carbohydrates: {item.carbohydrates_total_g} g</p>
              <p>Fiber: {item.fiber_g} g</p>
              <p>Sugar: {item.sugar_g} g</p>
              <button className="add-to-dashboard-button" onClick={() =>{ setCaloriesIntake(item.calories); handleAddToDashboard();addNutritionToDashboard(item)}}>Add to Dashboard</button>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default NutritionCalculator;
