// components/NutritionPlans.js

import React from 'react';
import { Link } from 'react-router-dom';
import nutritionPlans from '../data/nutritionPlans.json'; // Adjust path as per your project structure
import './NutritionPlans.css'; // Style file for this component
import { Footer } from '../pages/Footer';

const NutritionPlans = () => {
  return (
    <div>
      <div id='Head'>
      <h1 id='h1'>Nutrition</h1>
      <h4>Explore new culinary horizons, embrace healthier choices. Start your journey today!
      </h4>
      </div>
    <div className="plan-grid">
      {nutritionPlans.map(plan => (
        <Link key={plan.id} to={`/nutrition/${plan.id}`} className="plan-card">
          <div className="plan-image" style={{ backgroundImage: `url(${plan.backgroundImage})` }}>
            <h3>{plan.name}</h3>
          </div>
        </Link>
      ))}
    </div>
    <Footer />
    </div>
  );
};

export default NutritionPlans;
