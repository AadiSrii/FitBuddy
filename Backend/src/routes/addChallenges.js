// Example route setup using Express
import express from "express"
import addChallenge from "../controllers/challenges.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const challenges = express.Router();


// Route to add a new challenge
challenges.post('/challenges',authMiddleware('admin'), addChallenge);

export default challenges;
