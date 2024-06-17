import express from 'express';
import { getTotalNutritionData } from '../controllers/getNutrition.js';
import { addNewServing } from '../controllers/postNutrition.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const nutritionRouter = express.Router();

nutritionRouter.get('/nutrition', authMiddleware("admin","user"), getTotalNutritionData);
nutritionRouter.post('/nutrition', authMiddleware("admin","user"), addNewServing);

export default nutritionRouter;
