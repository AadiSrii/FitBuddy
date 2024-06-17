import mongoose from 'mongoose';

const { Schema } = mongoose;

const nutritionSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  totalCalories: {
    type: Number,
    default: 0,
  },
  totalServingSizeG: {
    type: Number,
    default: 0,
  },
  totalFatG: {
    type: Number,
    default: 0,
  },
  totalSaturatedFatG: {
    type: Number,
    default: 0,
  },
  totalProteinG: {
    type: Number,
    default: 0,
  },
  totalSodiumMg: {
    type: Number,
    default: 0,
  },
  totalPotassiumMg: {
    type: Number,
    default: 0,
  },
  totalCholesterolMg: {
    type: Number,
    default: 0,
  },
  totalCarbohydratesG: {
    type: Number,
    default: 0,
  },
  totalFiberG: {
    type: Number,
    default: 0,
  },
  totalSugarG: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

const Nutrition = mongoose.model('Nutrition', nutritionSchema);

export default Nutrition;
