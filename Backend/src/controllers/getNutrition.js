import Nutrition from "../models/nutrition.js";


const getTotalNutritionData = async (req, res) => {
  const userId = req.user.id;

  try {
    let nutritionData = await Nutrition.findOne({ userId });

    if (!nutritionData) {
      // Create a new record with default zero values
      nutritionData = new Nutrition({
        userId,
        totalCalories: 0,
        totalServingSizeG: 0,
        totalFatG: 0,
        totalSaturatedFatG: 0,
        totalProteinG: 0,
        totalSodiumMg: 0,
        totalPotassiumMg: 0,
        totalCholesterolMg: 0,
        totalCarbohydratesG: 0,
        totalFiberG: 0,
        totalSugarG: 0,
      });
      await nutritionData.save();
    }

    res.json(nutritionData);
  } catch (error) {
    console.error('Error fetching total nutrition data:', error.message);
    res.status(500).json({ msg: 'Server error. Could not fetch nutrition data.' });
  }
};

export { getTotalNutritionData };
