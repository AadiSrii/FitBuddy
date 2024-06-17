import React from 'react'
import BMICalculator from '../components/caloriescal'
import BurnedCalories from '../components/caloriesBurned'
import NutritionCalculator from '../components/Nutrition'

const Track = () => {
  return (

    <div style={{ backgroundImage: `url("https://picjj.com/images/2024/06/15/W7sYuH.png")`, backgroundSize: "cover", backgroundPosition:"center", height:"100vh", overflow:"hidden",backgroundAttachment:"fixed" ,
    }}>
      
    <div div style={{ overflowY: 'auto', height: '100vh' }}>
    <BMICalculator/>
    <BurnedCalories/>
    <NutritionCalculator/>
    </div>
    </div>
  )
}

export default Track