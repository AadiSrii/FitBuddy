import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FoodSearch.css';

const FoodSearch = () => {
  const [foodData, setFoodData] = useState(null);
  const [searchTerm, setSearchTerm] = useState('100ml milk');
  const [selectedServingSize, setSelectedServingSize] = useState(null);


   const addNewServing = async (nutritionItem) => {
    try {
        console.log(nutritionItem);
        let token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YzMzZTZmM2NhMWExYTMwNjYzMGNkIiwidXNlcm5hbWUiOiJUdXNoYXIgQmlzaHQiLCJlbWFpbCI6InR1c2hhcmJpc2h0MDIxNkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNzE4MzY3MjA2LCJleHAiOjE3MTg1NDcyMDZ9.6XgeiLRucXUFYiaKZnGVKArxHRADr32Zlg_IRM7AC5E"
      const response = await axios.post(`http://localhost:3000/api/auth/nutrition`, {
        nutritionItem,
      }, {
        headers: {
          'Content-Type': 'application/json',
          "x-auth-token" : token
        },
      });
     console.log(nutritionItem);
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
  
  // Function to update the daily metrics (including calorie intake)
  const updateDailyMetrics = async (caloriesIntake) => {
    console.log(caloriesIntake)
    let token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY2YzMzZTZmM2NhMWExYTMwNjYzMGNkIiwidXNlcm5hbWUiOiJUdXNoYXIgQmlzaHQiLCJlbWFpbCI6InR1c2hhcmJpc2h0MDIxNkBnbWFpbC5jb20iLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNzE4MzY3MjA2LCJleHAiOjE3MTg1NDcyMDZ9.6XgeiLRucXUFYiaKZnGVKArxHRADr32Zlg_IRM7AC5E"
    try {
      const response = await axios.post(`http://localhost:3000/api/dashboard/update`, {
        caloriesIntake,
      }, {
        headers: {
          'Content-Type': 'application/json',
          "x-auth-token" : token
        },
      });
  
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
        })
        
        ;

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
        ENERC_KCAL,
        PROCNT,
        FAT,
        CHOCDF,
        FIBTG,
        ...restNutrients
      } = item.food.nutrients;

      const nutritionItem = {
        calories: calculateNutrientValue(ENERC_KCAL, selectedMeasure),
        serving_size_g: selectedMeasure.weight,
        protein_g: calculateNutrientValue(PROCNT, selectedMeasure),
        fat_total_g: calculateNutrientValue(FAT, selectedMeasure),
        carbohydrates_total_g: calculateNutrientValue(CHOCDF, selectedMeasure),
        fiber_g: calculateNutrientValue(FIBTG, selectedMeasure),
        ...Object.entries(restNutrients).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [`${key.toLowerCase()}_mg`]: calculateNutrientValue(value, selectedMeasure),
          }),
          {}
        ),
      };

     
      await updateDailyMetrics({ caloriesIntake: nutritionItem.calories });
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
                          Calories:{' '}
                          {calculateNutrientValue(
                            item.food.nutrients.ENERC_KCAL,
                            selectedServingSize.measure
                          ).toFixed(2)}
                        </p>
                        <p>
                          Protein:{' '}
                          {calculateNutrientValue(
                            item.food.nutrients.PROCNT,
                            selectedServingSize.measure
                          ).toFixed(2)}
                          g
                        </p>
                        <p>
                          Fat:{' '}
                          {calculateNutrientValue(
                            item.food.nutrients.FAT,
                            selectedServingSize.measure
                          ).toFixed(2)}
                          g
                        </p>
                        <p>
                          Carbs:{' '}
                          {calculateNutrientValue(
                            item.food.nutrients.CHOCDF,
                            selectedServingSize.measure
                          ).toFixed(2)}
                          g
                        </p>
                        <p>
                          Fiber:{' '}
                          {calculateNutrientValue(
                            item.food.nutrients.FIBTG,
                            selectedServingSize.measure
                          ).toFixed(2)}
                          g
                        </p>
                        <button
                          onClick={() =>
                            selectedServingSize?.measure &&
                            handleAddToNutrition(item, selectedServingSize.measure)
                          }
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