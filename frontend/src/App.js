  import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Workout } from "./pages/workout";
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

const App = () => {

  const [isAdmin, setIsAdmin] = useState(true); 
  return (
    <div>
      <Navbar />
      <Navbar isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workout" element={<Workout />} />
        <Route path="/AllRoutes" element={<AllRoutes/>} />
        <Route path="/Community" element={<Community/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Benefits" element={<Benefits/>} />
        <Route path="/" element={<HomePage />} />
          <Route path="/nutrition" element={<NutritionPlans />} />
          <Route path="/nutrition/:planId" element={<NutritionDetails />} />
          <Route path="/workout" element={<WorkoutPlans />} />
          <Route path="/workout/:id" element={<WorkoutDetail />} />
          {isAdmin && <Route path="/challenges" element={<ChallengePage isAdmin={isAdmin} />} />} 
      </Routes>
      </div>
  );
};

export default App;
