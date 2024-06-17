import express from 'express';

import authMiddleware from '../middlewares/authMiddleware.js';
import { getUserCount } from '../controllers/countUser.js';

const adminRouter = express.Router();

adminRouter.get('/count',authMiddleware('admin'),  getUserCount);

export default adminRouter;