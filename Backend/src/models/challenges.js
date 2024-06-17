// Import mongoose
import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define Exercise schema (embedded)
const exerciseSchema = new Schema({
    id: Number,
    name: String
});

// Define Challenge schema
const challengeSchema = new Schema({
    title: String,
    description: String,
    duration: String,
    points: Number,
    exercises: [exerciseSchema] // Array of exercises
});

// Create a model based on the schema
const Challenge = mongoose.model('Challenge', challengeSchema);

// Export the model
export default Challenge;
