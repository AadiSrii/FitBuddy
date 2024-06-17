// Example route setup using Express
import express from "express"
import addChallenge from "../controllers/challenges.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { getChallenge } from "../controllers/getChallenges.js";
const challenges = express.Router();


// Route to add a new challenge
challenges.post('/challenges',authMiddleware('admin'), addChallenge);
challenges.get('/challenges',authMiddleware('admin'), getChallenge);

export default challenges;
