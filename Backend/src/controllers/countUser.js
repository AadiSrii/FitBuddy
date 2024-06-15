// controllers/userController.js

import User from "../models/userModel.js";


export const getUserCount = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.status(200).json({ count });
  } catch (error) {
    console.error('Error fetching user count:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
