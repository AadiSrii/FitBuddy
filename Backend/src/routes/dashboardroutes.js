// routes/dashboardRoutes.js
import express from 'express';

import authMiddleware from '../middlewares/authMiddleware.js';
import getDailyDashboardMetrics from '../controllers/todaysData.js';
import { getDashboardMetrics } from '../controllers/getdashboard.js';
import updateDailyMetrics from '../controllers/dashboard.js';




const DashboardRouter = express.Router();

// Route to update daily metrics
DashboardRouter.post('/update', authMiddleware("user","admin"), updateDailyMetrics);

// Route to get dashboard metrics
DashboardRouter.get('/metrics', authMiddleware("user","admin"), getDashboardMetrics);

DashboardRouter.get('/metrics/daily',authMiddleware("user","admin"), getDailyDashboardMetrics );


export default DashboardRouter;
