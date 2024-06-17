import Nutrition from "../models/nutrition.js";


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
    let nutritionData = await Nutrition.findOne({ userId });
    console.log(calories)
    if (!nutritionData) {
      // If no data exists, create a new entry
      nutritionData = new Nutrition({
        userId,
        totalCalories: calories || 0,
        totalServingSizeG: serving_size_g || 0,
        totalFatG: fat_total_g || 0,
        totalSaturatedFatG: fat_saturated_g || 0,
        totalProteinG: protein_g || 0,
        totalSodiumMg: sodium_mg || 0,
        totalPotassiumMg: potassium_mg || 0,
        totalCholesterolMg: cholesterol_mg || 0,
        totalCarbohydratesG: carbohydrates_total_g || 0,
        totalFiberG: fiber_g || 0,
        totalSugarG: sugar_g || 0,
      });
    } else {
      // Update existing data
      nutritionData.totalCalories += calories || 0;
      nutritionData.totalServingSizeG += serving_size_g || 0;
      nutritionData.totalFatG += fat_total_g || 0;
      nutritionData.totalSaturatedFatG += fat_saturated_g || 0;
      nutritionData.totalProteinG += protein_g || 0;
      nutritionData.totalSodiumMg += sodium_mg || 0;
      nutritionData.totalPotassiumMg += potassium_mg || 0;
      nutritionData.totalCholesterolMg += cholesterol_mg || 0;
      nutritionData.totalCarbohydratesG += carbohydrates_total_g || 0;
      nutritionData.totalFiberG += fiber_g || 0;
      nutritionData.totalSugarG += sugar_g || 0;
    }
 console.log(nutritionData);
    await nutritionData.save();
    res.json(nutritionData);
  } catch (error) {
    console.error('Error adding new serving:', error.message);
    res.status(500).json({ msg: 'Server error. Could not add new serving.' });
  }
};

export { addNewServing };
