// Import the Challenge model

import Challenge from "../models/challenges.js";




// Controller function to add a new challenge
async function addChallenge(req, res) {
    try {
        // Assuming req.body contains the new challenge data
        const newChallenge = await Challenge.create(req.body);
 
        res.status(201).json(newChallenge); // Respond with the newly created challenge

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


  export default  addChallenge

