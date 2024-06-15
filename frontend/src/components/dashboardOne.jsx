import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css'; // Create a CSS file for styling
import { FaBurn, FaDumbbell, FaAppleAlt, FaBullseye } from 'react-icons/fa'; // Import icons
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MetricsHistory from './graph';
import NutritionPieChart from './pieChart';

const Dashboard = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        // const token = localStorage.getItem('token'); // Assuming you store your JWT in localStorage
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YzMzZTZmM2NhMWExYTMwNjYzMGNkIiwidXNlcm5hbWUiOiJUdXNoYXIgQmlzaHQiLCJlbWFpbCI6InR1c2hhcmJpc2h0MDIxNkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNzE4MzY3MjA2LCJleHAiOjE3MTg1NDcyMDZ9.6XgeiLRucXUFYiaKZnGVKArxHRADr32Zlg_IRM7AC5E",
          },
        };

        const res = await axios.get('http://localhost:3000/api/dashboard/metrics/daily', config);
        setMetrics(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchMetrics();
  }, []);


  if (!metrics) return <div>Loading...</div>;

  const { dailyMetrics, caloriesIntakeGoal } = metrics;
  const { date, caloriesBurned, workoutsCompleted, caloriesIntake } = dailyMetrics;

  const intakePercentage = ((caloriesIntake / caloriesIntakeGoal) * 100).toFixed(2);

  return (
    <div className="dashboard-container"  >
      <h2 className="title">Daily Metrics for {date}</h2>
      <div className="cards">
        <div className="card calories-burned">
          <FaBurn className="icon" />
          <label>Calories Burned</label>
          <span>{caloriesBurned}</span>
        </div>
        <div className="card workouts-completed">
          <FaDumbbell className="icon" />
          <label>Workouts Completed</label>
          <span>{workoutsCompleted}</span>
        </div>
        <div className="card calories-intake">
          <FaAppleAlt className="icon" />
          <label>Calories Intake</label>
          <span>{caloriesIntake}</span>
        </div>
        <div className="card calories-goal">
          <FaBullseye className="icon" />
          <label>Calories Intake Goal</label>
          <span>{caloriesIntakeGoal}</span>
        </div>
        <div className="card progress-card">
          <label>Intake Completion</label>
          <div className="progress-container">
            <CircularProgressbar
              value={intakePercentage}
              text={`${intakePercentage}%`}
              styles={buildStyles({
                pathColor: `rgba(62, 152, 199, ${intakePercentage / 100})`,
                textColor: '#f88',
                trailColor: '#d6d6d6',
                backgroundColor: '#3e98c7',
              })}
            />
          </div>
         
          

        </div>
        <NutritionPieChart/>
      </div>
      {/* <div className="graph-section">
       
      
      </div> */}

      <MetricsHistory/>
    </div>
  );
};

export default Dashboard;
