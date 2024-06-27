import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FoodSearch.css';

const FoodSearch = () => {
  const [foodData, setFoodData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('100ml milk');
  const [selectedServingSize, setSelectedServingSize] = useState(null);

  const addNewServing = async (nutritionItem) => {
    try {
      let token = JSON.parse(localStorage.getItem("fitbuddy"));
      const response = await axios.post(
        `https://fitbuddy-h75f.onrender.com/api/auth/nutrition`,
        { nutritionItem },
        {
          headers: {
            'Content-Type': 'application/json',
            "x-auth-token": token.token,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Failed to add nutrition to dashboard.');
      }
    } catch (error) {
      console.error('Error adding nutrition to dashboard:', error);
      throw new Error('Failed to add nutrition to dashboard. Please try again later.');
    }
  };

  const updateDailyMetrics = async ({caloriesIntake}) => {
    let token = JSON.parse(localStorage.getItem("fitbuddy"));
    let caloriesBurned =0;
    let  workoutsCompleted =0;
    try {
      const response = await axios.post(
        `https://fitbuddy-h75f.onrender.com/api/dashboard/update`,
        { caloriesIntake,caloriesBurned, workoutsCompleted },
        {
          headers: {
            'Content-Type': 'application/json',
            "x-auth-token": token.token,
          },
        }
      );

      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error('Failed to update calorie intake to dashboard.');
      }
    } catch (error) {
      console.error('Error updating calorie intake to dashboard:', error);
      throw new Error('Failed to update calorie intake to dashboard. Please try again later.');
    }
  };

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        const response = await axios.get('https://api.edamam.com/api/food-database/v2/parser', {
          params: {
            app_id: '0bae2364',
            app_key: 'b6d3efddd6e62d68bdff1da3e25d5bd1',
            ingr: searchTerm,
            'nutrition-type': 'logging',
          },
        });
        setFoodData(response.data);
      } catch (error) {
        console.error('Error fetching food data:', error);
      }
    };

    fetchFoodData();
  }, [searchTerm]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleServingSizeChange = (event, item) => {
    const selectedMeasure = item.measures.find(
      (measure) => measure.label === event.target.value
    );
    setSelectedServingSize({ item, measure: selectedMeasure });
  };

  const calculateNutrientValue = (nutrientValue, measure) => {
    if (measure && measure.weight) {
      return (nutrientValue * measure.weight) / 100;
    }
    return nutrientValue;
  };

  const handleAddToNutrition = async (item, selectedMeasure) => {
    try {
      const {
        ENERC_KCAL = 0,
        PROCNT = 0,
        FAT = 0,
        FASAT = 0,
        CHOCDF = 0,
        FIBTG = 0,
        SUGAR = 0,
        NA = 0,
        K = 0,
        CHOLE = 0,
      } = item.food.nutrients;

      const nutritionItem = {
        calories: parseInt(calculateNutrientValue(ENERC_KCAL, selectedMeasure)) || 0,
        serving_size_g: parseInt(selectedMeasure.weight) || 0,
        protein_g: parseInt(calculateNutrientValue(PROCNT, selectedMeasure)) || 0,
        fat_total_g: parseInt(calculateNutrientValue(FAT, selectedMeasure)) || 0,
        fat_saturated_g: parseInt(calculateNutrientValue(FASAT, selectedMeasure)) || 0,
        carbohydrates_total_g: parseInt(calculateNutrientValue(CHOCDF, selectedMeasure)) || 0,
        fiber_g: parseInt(calculateNutrientValue(FIBTG, selectedMeasure)) || 0,
        sugar_g: parseInt(calculateNutrientValue(SUGAR, selectedMeasure)) || 0,
        sodium_mg: parseInt(calculateNutrientValue(NA, selectedMeasure)) || 0,
        potassium_mg: parseInt(calculateNutrientValue(K, selectedMeasure)) || 0,
        cholesterol_mg: parseInt(calculateNutrientValue(CHOLE, selectedMeasure)) || 0,
      };

      await addNewServing(nutritionItem);
      await updateDailyMetrics({ caloriesIntake:nutritionItem.calories });
      alert('Nutrition information added to dashboard!');
    } catch (error) {
      console.error('Error adding nutrition information:', error);
      alert('Failed to add nutrition information. Please try again later.');
    }
  };

  return (
    <div className="food-search">
      <h1>Food Search</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a food..."
      />
      {foodData ? (
        <div className="food-data">
          <h2>{foodData.text}</h2>
          <div className="food-items">
            {foodData.hints.map((item, index) => (
              <div key={index} className="food-item">
                <img src={item.food.image} alt={item.food.label} />
                <h3>{item.food.label}</h3>
                {item.food.nutrients ? (
                  <>
                    <select
                      value={selectedServingSize?.measure?.label || ''}
                      onChange={(event) => handleServingSizeChange(event, item)}
                    >
                      <option value="">Select Serving Size</option>
                      {item.measures.map((measure, measureIndex) => (
                        <option key={measureIndex} value={measure.label}>
                          {measure.label}
                        </option>
                      ))}
                    </select>
                    {selectedServingSize?.item === item ? (
                      <>
                        <p>
                          Calories: {calculateNutrientValue(item.food.nutrients.ENERC_KCAL, selectedServingSize.measure).toFixed(2)}
                        </p>
                        <p>
                          Protein: {calculateNutrientValue(item.food.nutrients.PROCNT, selectedServingSize.measure).toFixed(2)} g
                        </p>
                        <p>
                          Fat: {calculateNutrientValue(item.food.nutrients.FAT, selectedServingSize.measure).toFixed(2)} g
                        </p>
                        <p>
                          Saturated Fat: {calculateNutrientValue(item.food.nutrients.FASAT, selectedServingSize.measure).toFixed(2)} g
                        </p>
                        <p>
                          Carbs: {calculateNutrientValue(item.food.nutrients.CHOCDF, selectedServingSize.measure).toFixed(2)} g
                        </p>
                        <p>
                          Fiber: {calculateNutrientValue(item.food.nutrients.FIBTG, selectedServingSize.measure).toFixed(2)} g
                        </p>
                        <p>
                          Sugar: {calculateNutrientValue(item.food.nutrients.SUGAR, selectedServingSize.measure).toFixed(2)} g
                        </p>
                        <p>
                          Sodium: {calculateNutrientValue(item.food.nutrients.NA, selectedServingSize.measure).toFixed(2)} mg
                        </p>
                        <p>
                          Potassium: {calculateNutrientValue(item.food.nutrients.K, selectedServingSize.measure).toFixed(2)} mg
                        </p>
                        <p>
                          Cholesterol: {calculateNutrientValue(item.food.nutrients.CHOLE, selectedServingSize.measure).toFixed(2)} mg
                        </p>
                        <button
                          onClick={() => selectedServingSize?.measure && handleAddToNutrition(item, selectedServingSize.measure)}
                          disabled={!selectedServingSize?.measure}
                        >
                          Add to Dashboard
                        </button>
                      </>
                    ) : (
                      <p>Select a serving size to see nutrient values</p>
                    )}
                  </>
                ) : (
                  <p>No nutrient information available</p>
                )}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FoodSearch;
