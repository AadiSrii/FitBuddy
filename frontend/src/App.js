// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NutritionPlans from './components/NutritionPlans';
import NutritionDetails from './components/NutritionDetails';
import WorkoutPlans from './components/WorkoutPlans';
import WorkoutDetail from './components/WorkoutDetail';
import HomePage from './components/HomePage';
import './App.css';
import nutritionPlans from './data/nutritionPlans.json'; // Adjust path as per your project structure

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nutrition" element={<NutritionPlans />} />
          <Route path="/nutrition/:planId" element={<NutritionDetails plans={nutritionPlans} />} />
          <Route path="/workout" element={<WorkoutPlans />} />
          <Route path="/workout/:id" element={<WorkoutDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
