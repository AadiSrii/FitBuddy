import express from 'express';
import register from '../controllers/registerController.js';
import login from '../controllers/loginController.js';
import authMiddleware from '../middlewares/authMiddleware.js';


const router = express.Router();
router.post('/register', register);
router.post('/login', login);
router.get('/protected', authMiddleware('user', 'admin'), (req, res) => {
  res.json({ msg: 'This is a protected route' });
});

export default router;
