import React from 'react'
import BMICalculator from '../components/caloriescal'
import BurnedCalories from '../components/caloriesBurned'
import NutritionCalculator from '../components/Nutrition'

const Track = () => {
  return (
    <div div style={{ overflowY: 'auto', height: '100vh' }}>
    <BMICalculator/>
    <BurnedCalories/>
    <NutritionCalculator/>
    </div>
  )
}

export default Track