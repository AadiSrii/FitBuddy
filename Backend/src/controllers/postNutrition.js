import Nutrition from "../models/nutrition.js";

// Function to sanitize and validate nutrition data
const sanitizeAndValidateNutrition = (nutritionItem) => {
  const sanitizedNutrition = {};

  // Sanitize and validate each field
  sanitizedNutrition.totalCalories = parseFloat(nutritionItem.calories);
  sanitizedNutrition.totalServingSizeG = parseFloat(nutritionItem.serving_size_g);
  sanitizedNutrition.totalFatG = parseFloat(nutritionItem.fat_total_g);
  sanitizedNutrition.totalSaturatedFatG = parseFloat(nutritionItem.fat_saturated_g);
  sanitizedNutrition.totalProteinG = parseFloat(nutritionItem.protein_g);
  sanitizedNutrition.totalSodiumMg = parseFloat(nutritionItem.sodium_mg);
  sanitizedNutrition.totalPotassiumMg = parseFloat(nutritionItem.potassium_mg);
  sanitizedNutrition.totalCholesterolMg = parseFloat(nutritionItem.cholesterol_mg);
  sanitizedNutrition.totalCarbohydratesG = parseFloat(nutritionItem.carbohydrates_total_g);
  sanitizedNutrition.totalFiberG = parseFloat(nutritionItem.fiber_g);
  sanitizedNutrition.totalSugarG = parseFloat(nutritionItem.sugar_g);

  // Check if any field is NaN after parsing
  for (const key in sanitizedNutrition) {
    if (isNaN(sanitizedNutrition[key])) {
      throw new Error(`Invalid value for ${key}`);
    }
  }

  return sanitizedNutrition;
};

const addNewServing = async (req, res) => {
  const userId = req.user.id;
  
  const {
    calories,
    serving_size_g,
    fat_total_g,
    fat_saturated_g,
    protein_g,
    sodium_mg,
    potassium_mg,
    cholesterol_mg,
    carbohydrates_total_g,
    fiber_g,
    sugar_g,
  } = req.body.nutritionItem;
    
  try {
    const validNutrition = sanitizeAndValidateNutrition({
      calories,
      serving_size_g,
      fat_total_g,
      fat_saturated_g,
      protein_g,
      sodium_mg,
      potassium_mg,
      cholesterol_mg,
      carbohydrates_total_g,
      fiber_g,
      sugar_g,
    });

    let nutritionData = await Nutrition.findOne({ userId });
    
    if (!nutritionData) {
      // If no data exists, create a new entry
      nutritionData = new Nutrition({
        userId,
        ...validNutrition,
      });
    } else {
      // Update existing data
      for (const key in validNutrition) {
        nutritionData[key] += validNutrition[key];
      }
    }

    console.log("Updated nutrition data:", nutritionData);
    await nutritionData.save();
    res.json(nutritionData);
  } catch (error) {
    console.error('Error adding new serving:', error.message);
    res.status(500).json({ msg: 'Server error. Could not add new serving.' });
  }
};

export { addNewServing };
