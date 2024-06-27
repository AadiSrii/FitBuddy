import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SingleCardDashboard.css'; // Create a CSS file for styling
import { FaUsers } from 'react-icons/fa'; // Import icon
import ChallengeForm from './Challenges/ChallengeForm'

const SingleCardDashboard = () => {
  const [userCount, setUserCount] = useState(null);
 
  useEffect(() => {
    const fetchUserCount = async () => {
      try {
      
        const fitbuddyData = JSON.parse(localStorage.getItem("fitbuddy"));

    
        const config = {
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token':  fitbuddyData.token,
          },
        };

        const res = await axios.get('https://fitbuddy-h75f.onrender.com/api/admin/users/count', config);
        setUserCount(res.data.count);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchUserCount();
  }, []);

  if (userCount === null) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <div className="card user-count-card">
        <FaUsers className="icon" />
        <label>Total Users</label>
        <span>{userCount}</span>
      </div>
      <ChallengeForm />
    </div>
  );
};

export default SingleCardDashboard;
