import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkoutPlans from './components/WorkoutPlans';
import WorkoutDetail from './components/WorkoutDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WorkoutPlans />} />
          <Route path="/plan/:id" element={<WorkoutDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
