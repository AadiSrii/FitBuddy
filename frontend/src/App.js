// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NutritionPlans from './components/NutritionPlans';
import NutritionDetails from './components/NutritionDetails';
import WorkoutPlans from './components/WorkoutPlans';
import WorkoutDetail from './components/WorkoutDetail';
import HomePage from './components/HomePage';
import ChallengePage from './components/Challenges/ChallengePage';
import './App.css'; // Ensure you have the correct path to your CSS file

const App = () => {
  const [isAdmin, setIsAdmin] = useState(true); // Simulate admin access

  return (
    <Router>
      <div className="App">
        <Navbar isAdmin={isAdmin} /> {/* Pass isAdmin flag to Navbar */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nutrition" element={<NutritionPlans />} />
          <Route path="/nutrition/:planId" element={<NutritionDetails />} />
          <Route path="/workout" element={<WorkoutPlans />} />
          <Route path="/workout/:id" element={<WorkoutDetail />} />
          {isAdmin && <Route path="/challenges" element={<ChallengePage isAdmin={isAdmin} />} />} {/* Only show Challenges page if isAdmin */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
