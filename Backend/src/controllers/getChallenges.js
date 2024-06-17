// controllers/userController.js

import Challenge from "../models/challenges.js";





export const getChallenge = async (req, res) => {
  try {
    const challenge = await Challenge.find({});
    res.status(200).json({ challenge });
  } catch (error) {
    console.error('Error fetching challenges:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
