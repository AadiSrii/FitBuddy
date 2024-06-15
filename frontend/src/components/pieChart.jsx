import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import './NutritionPieChart.css';

const NutritionPieChart = () => {
  const [totalNutrition, setTotalNutrition] = useState(null);
  const [error, setError] = useState('');

//   const verificationToken = 'your_verification_token_here';

  useEffect(() => {
    fetchTotalNutritionData();
  }, []);

  const fetchTotalNutritionData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/auth/nutrition', {
        headers: {
          'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YzMzZTZmM2NhMWExYTMwNjYzMGNkIiwidXNlcm5hbWUiOiJUdXNoYXIgQmlzaHQiLCJlbWFpbCI6InR1c2hhcmJpc2h0MDIxNkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNzE4MzY3MjA2LCJleHAiOjE3MTg1NDcyMDZ9.6XgeiLRucXUFYiaKZnGVKArxHRADr32Zlg_IRM7AC5E"
        }
      });
      console.log(response.data);
      setTotalNutrition(response.data);
    } catch (err) {
      console.error('Error fetching total nutrition data:', err.message);
      setError('Could not fetch total nutrition data. Please try again.');
    }
  };

  const pieData = totalNutrition ? {
    labels: ['Calories', 'Protein (g)', 'Fat (g)', 'Carbohydrates (g)', 'Fiber (g)'],
    datasets: [{
      data: [
        totalNutrition.totalCalories,
        totalNutrition.totalProteinG,
        totalNutrition.totalFatG,
        totalNutrition.totalCarbohydratesG,
        totalNutrition.totalFiberG
      ],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#FF9F40', '#4BC0C0']
    }]
  } : null;

  return (
    <div className="card pie-chart-card">
      <h3 className="chart-title">Nutrition Summary</h3>
      {error && <div className="error">{error}</div>}
      <div className="pie-chart-container">
        {pieData && <Pie data={pieData} options={{ maintainAspectRatio: false }} />}
      </div>
      <div className="nutrition-labels">
        <ul>
          <li><span style={{ backgroundColor: '#FF6384' }}></span> Calories</li>
          <li><span style={{ backgroundColor: '#36A2EB' }}></span> Protein (g)</li>
          <li><span style={{ backgroundColor: '#FFCE56' }}></span> Fat (g)</li>
          <li><span style={{ backgroundColor: '#FF9F40' }}></span> Carbohydrates (g)</li>
          <li><span style={{ backgroundColor: '#4BC0C0' }}></span> Fiber (g)</li>
        </ul>
      </div>
    </div>
  );
};

export default NutritionPieChart;
