// components/NutritionPlans.js

import React from 'react';
import { Link } from 'react-router-dom';
import nutritionPlans from '../data/nutritionPlans.json'; // Adjust path as per your project structure
import './NutritionPlans.css'; // Style file for this component

const NutritionPlans = () => {
  return (
    <div className="plan-grid">
      {nutritionPlans.map(plan => (
        <Link key={plan.id} to={`/nutrition/${plan.id}`} className="plan-card">
          <div className="plan-image" style={{ backgroundImage: `url(${plan.backgroundImage})` }}>
            <h3>{plan.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NutritionPlans;
