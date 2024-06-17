import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
// import  Workout  from "./components/workout";
import { AllRoutes } from "./pages/AllRoutes";
import { Community } from "./pages/Community";
import { Shop } from "./pages/Shop";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { Benefits } from "./pages/Benefits";
import NutritionPlans from './components/NutritionPlans';
import NutritionDetails from './components/NutritionDetails';
import WorkoutPlans from './components/WorkoutPlans';
import WorkoutDetail from './components/WorkoutDetail';
import HomePage from './components/HomePage';
import ChallengePage from './components/Challenges/ChallengePage';
import './App.css';
import SwitchComponent from './components/MainDashboard';
import Track from './pages/track';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workout" element={<WorkoutPlans />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Benefits" element={<Benefits/>} />
          <Route path="/nutrition" element={<NutritionPlans />} />
          <Route path="/nutrition/:planId" element={<NutritionDetails />} />
          <Route path="/workout/:id" element={<WorkoutDetail />} />
          <Route path="/challenges" element={<ChallengePage />} />
          <Route path="/dashboard" element={<SwitchComponent />} />
          <Route path="/track" element={<Track />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
