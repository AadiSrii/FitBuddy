// components/NutritionDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import nutritionPlans from '../data/nutritionPlans.json'; // Adjust path as per your project structure
import './NutritionDetails.css'; // Style file for this component

const NutritionDetails = () => {
  const { planId } = useParams();
  const plan = nutritionPlans.find(plan => plan.id === planId);

  if (!plan) return <div>Plan not found</div>;

  return (
    <div className="details-container">
      <h2>{plan.name}</h2>
      <div className="details-content">
        <div className="plan-image" style={{ backgroundImage: `url(${plan.backgroundImage})` }}>
          <h3>{plan.name}</h3>
        </div>
        <div className="foods-list">
          <h3>Recommended Foods:</h3>
          <ul>
            {plan.foods.map((food, index) => (
              <li key={index}>
                <img src={food.image} alt={food.name} />
                <p>{food.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="nutrition-graph">
          <h3>Nutrition Graph:</h3>
          <p>Calories: {plan.nutritionGraph.calories.join(', ')}</p>
          <p>Protein: {plan.nutritionGraph.protein.join(', ')}</p>
          <p>Carbs: {plan.nutritionGraph.carbs.join(', ')}</p>
          <p>Fat: {plan.nutritionGraph.fat.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default NutritionDetails;
