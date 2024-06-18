import React, { useState } from 'react';
import axios from 'axios';
import './BMICalculator.css';

const BMICalculator = () => {
  const [form, setForm] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male',
    activityLevel: 'sedentary',
    desiredWeight: '',
    days: '',
    bmi: null,
    status: '',
    dailyCalories: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const calculateBMI = () => {
    const heightInMeters = form.height / 100;
    const calculatedBMI = form.weight / (heightInMeters * heightInMeters);
    const status =
      calculatedBMI < 18.5
        ? 'Underweight'
        : calculatedBMI >= 18.5 && calculatedBMI <= 24.9
        ? 'Fit'
        : 'Overweight';

    setForm({
      ...form,
      bmi: calculatedBMI.toFixed(2),
      status
    });
  };

  const calculateBMR = () => {
    const { weight, height, age, gender } = form;
    if (gender === 'male') {
      return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      return 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }
  };

  const calculateCalories = () => {
    const bmr = calculateBMR();
    const activityMultiplier = {
      sedentary: 1.2,
      lightly_active: 1.375,
      moderately_active: 1.55,
      very_active: 1.725,
      super_active: 1.9
    };

    const tdee = bmr * activityMultiplier[form.activityLevel];
    const weightChange = form.desiredWeight - form.weight;
    const totalCaloriesNeeded = weightChange * 7700;
    const dailyCalorieChange = totalCaloriesNeeded / form.days;
    const dailyCalorieIntake = tdee + dailyCalorieChange;

    setForm({
      ...form,
      dailyCalories: dailyCalorieIntake.toFixed(2)
    });
  };

  const handleSetGoal = async () => {
    try {

      const fitbuddyData = JSON.parse(localStorage.getItem("fitbuddy"));
      const response = await axios.post(
        'https://fitbuddy-h75f.onrender.com/api/dashboard/update',
        { caloriesIntakeGoal: form.dailyCalories },
        {
          headers: {
            'x-auth-token': fitbuddyData.token
          }
        }
      );
      console.log('Goal set successfully:', response.data);
      // Optionally, you can update UI or show a success message
    } catch (error) {
      console.error('Error setting goal:', error);
      // Handle error, show error message to user
    }
  };

  return (
    <div className="calculator-container">
      <h1 className="title">BMI and Calorie Calculator</h1>
      <div className="input-group">
        <label>Weight (kg): </label>
        <input
          type="number"
          name="weight"
          value={form.weight}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Height (cm): </label>
        <input
          type="number"
          name="height"
          value={form.height}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Age: </label>
        <input
          type="number"
          name="age"
          value={form.age}
          onChange={handleChange}
        />
      </div>
      <div className="input-group">
        <label>Gender: </label>
        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="input-group">
        <label>Activity Level: </label>
        <select
          name="activityLevel"
          value={form.activityLevel}
          onChange={handleChange}
        >
          <option value="sedentary">
            Sedentary (little or no exercise)
          </option>
          <option value="lightly_active">
            Lightly active (light exercise/sports 1-3 days/week)
          </option>
          <option value="moderately_active">
            Moderately active (moderate exercise/sports 3-5 days/week)
          </option>
          <option value="very_active">
            Very active (hard exercise/sports 6-7 days a week)
          </option>
          <option value="super_active">
            Super active (very hard exercise/sports & physical job or 2x
            training)
          </option>
        </select>
      </div>
      <button className="calculate-button" onClick={calculateBMI}>
        Calculate BMI
      </button>
      {form.bmi && (
        <div className="result">
          <h2>Your BMI: {form.bmi}</h2>
          <h2>Status: {form.status}</h2>
        </div>
      )}
      <div className="goal-section">
        <h3>Goal Setting</h3>
        <div className="input-group">
          <label>Desired Weight (kg): </label>
          <input
            type="number"
            name="desiredWeight"
            value={form.desiredWeight}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label>Duration (days): </label>
          <input
            type="number"
            name="days"
            value={form.days}
            onChange={handleChange}
          />
        </div>
        <button
          className="calculate-button"
          onClick={calculateCalories}
        >
          Calculate Daily Calorie Intake
        </button>
        {form.dailyCalories && (
          <div className="result">
            <h2>
              Daily Calorie Intake: {form.dailyCalories} kcal/day
            </h2>
            <button
              className="set-goal-button"
              onClick={handleSetGoal}
            >
              Set Goal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;