import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './MetricsHistory.css';

const MetricsHistory = () => {
  const [metricsHistory, setMetricsHistory] = useState([]);
  const [selectedGraph, setSelectedGraph] = useState('caloriesBurned');

  useEffect(() => {
    const fetchMetricsHistory = async () => {
      try {
        // const token = localStorage.getItem('token'); // Assuming you store your JWT in localStorage
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YzMzZTZmM2NhMWExYTMwNjYzMGNkIiwidXNlcm5hbWUiOiJUdXNoYXIgQmlzaHQiLCJlbWFpbCI6InR1c2hhcmJpc2h0MDIxNkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNzE4MzY3MjA2LCJleHAiOjE3MTg1NDcyMDZ9.6XgeiLRucXUFYiaKZnGVKArxHRADr32Zlg_IRM7AC5E",
          },
        };

        const res = await axios.get('http://localhost:3000/api/dashboard/metrics', config);
        setMetricsHistory(res.data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchMetricsHistory();
  }, []);

 

  if (metricsHistory.length < 2) {
    return <div className="insufficient-data">At least 2 days of data is required to display the graph.</div>;
  }

  // Prepare data for the line chart
  const dates = metricsHistory.map(metric => metric.date);
  const caloriesBurned = metricsHistory.map(metric => metric.caloriesBurned);
  const workoutsCompleted = metricsHistory.map(metric => metric.workoutsCompleted);
  const caloriesIntake = metricsHistory.map(metric => metric.caloriesIntake);

  const data = {
    labels: dates,
    datasets: [
      {
        label: 'Calories Burned',
        data: caloriesBurned,
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
      },
      {
        label: 'Workouts Completed',
        data: workoutsCompleted,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: false,
      },
      {
        label: 'Calories Intake',
        data: caloriesIntake,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  const getGraphData = () => {
    switch (selectedGraph) {
      case 'caloriesBurned':
        return {
          labels: dates,
          datasets: [
            {
              label: 'Calories Burned',
              data: caloriesBurned,
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: false,
            },
          ],
        };
      case 'workoutsCompleted':
        return {
          labels: dates,
          datasets: [
            {
              label: 'Workouts Completed',
              data: workoutsCompleted,
              borderColor: 'rgba(54, 162, 235, 1)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              fill: false,
            },
          ],
        };
      case 'caloriesIntake':
        return {
          labels: dates,
          datasets: [
            {
              label: 'Calories Intake',
              data: caloriesIntake,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: false,
            },
          ],
        };
      default:
        return data;
    }
  };

  return (
    <div className="metrics-history-container">
      <h2 className="title">{`Metrics History for the Last ${metricsHistory.length} Days`}</h2>
      <div className="button-group">
        <button
          className={`graph-button ${selectedGraph === 'caloriesBurned' ? 'active' : ''}`}
          onClick={() => setSelectedGraph('caloriesBurned')}
        >
          Calories Burned
        </button>
        <button
          className={`graph-button ${selectedGraph === 'workoutsCompleted' ? 'active' : ''}`}
          onClick={() => setSelectedGraph('workoutsCompleted')}
        >
          Workouts Completed
        </button>
        <button
          className={`graph-button ${selectedGraph === 'caloriesIntake' ? 'active' : ''}`}
          onClick={() => setSelectedGraph('caloriesIntake')}
        >
          Calories Intake
        </button>
      </div>
      <Line data={getGraphData()} options={options} />
    </div>
  );
};

export default MetricsHistory;
