import express from 'express';
import challenges from './src/routes/addChallenges.js';
import dotenv from 'dotenv';
import router from './src/routes/authRoutes.js';
import connectDB from './src/configs/db.js';
import cors from "cors"
dotenv.config();

const app = express();

app.use(express.json()); // Built-in middleware for parsing JSON request bodies
app.use(cors());
app.use('/api/auth', router); 
app.use('/api/dashboard', DashboardRouter)
app.use("/api/auth", nutritionRouter)
app.use("/api/admin/challenges",challenges);
app.use('/api/admin/users', adminRouter);
app.get("/", (req,res)=>{
res.send("This is home route")
})
const PORT = process.env.PORT || 5000;

import cron from 'node-cron';
import Dashboard from './src/models/dashboard.js';
import DashboardRouter from './src/routes/dashboardroutes.js';
import nutritionRouter from './src/routes/nutritionrouter.js';
import adminRouter from './src/routes/userCount.js';


import cron from 'node-cron';
import Nutrition from './models/Nutrition.js';

// Function to reset nutrition data
const resetNutritionData = async () => {
  try {
    await Nutrition.updateMany({}, {
      calories: 0,
      serving_size_g: 0,
      fat_total_g: 0,
      fat_saturated_g: 0,
      protein_g: 0,
      sodium_mg: 0,
      potassium_mg: 0,
      cholesterol_mg: 0,
      carbohydrates_total_g: 0,
      fiber_g: 0,
      sugar_g: 0,
    });
    console.log('Nutrition data reset successfully!');
  } catch (error) {
    console.error('Error resetting nutrition data:', error.message);
  }
};








// Run this cron job at the end of each day (e.g., at 23:59)
cron.schedule('59 23 * * *', async () => {
  try {

   await resetNutritionData();

    const dashboards = await Dashboard.find();
    
    dashboards.forEach(async (dashboard) => {
      if (dashboard.dailyMetrics.caloriesBurned > 0 || dashboard.dailyMetrics.workoutsCompleted > 0 || dashboard.dailyMetrics.caloriesIntake > 0) {
        // Move daily metrics to history
        dashboard.metricsHistory.push({
          date: dashboard.dailyMetrics.date,
          caloriesBurned: dashboard.dailyMetrics.caloriesBurned,
          workoutsCompleted: dashboard.dailyMetrics.workoutsCompleted,
          caloriesIntake: dashboard.dailyMetrics.caloriesIntake,
        });
        
        // Reset daily metrics for the new day
        dashboard.dailyMetrics = {
          caloriesBurned: 0,
          workoutsCompleted: 0,
          caloriesIntake: 0,
        };
        await dashboard.save();
      }
    });
  } catch (err) {
    console.error('Error moving daily metrics to history:', err.message);
  }
});

app.listen(PORT, async() => {
  await connectDB();
  console.log(`Server started on port ${PORT}`);
});
