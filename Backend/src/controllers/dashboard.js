import Dashboard, { getCurrentDate } from "../models/dashboard.js";


const updateDailyMetrics = async (req, res) => {
  const userId = req.user.id; // userId obtained from authentication middleware
  const { caloriesBurned, workoutsCompleted, caloriesIntake } = req.body; // Data to update from request body

  try {
    let dashboard = await Dashboard.findOne({ userId });

    if (!dashboard){
      // Create new dashboard entry if not exists
      dashboard = new Dashboard({
        userId,
        dailyMetrics: {
            date : getCurrentDate(),
          caloriesBurned: caloriesBurned || 0, 
          workoutsCompleted: workoutsCompleted || 0,
          caloriesIntake: caloriesIntake || 0,
        },
        caloriesIntakeGoal: req.body.caloriesIntakeGoal || 0, 
      });
    } else {
      // Update existing dashboard entry
      dashboard.dailyMetrics.caloriesBurned += caloriesBurned || 0; // Add to existing value or default to 0
      dashboard.dailyMetrics.workoutsCompleted += workoutsCompleted || 0;
      dashboard.dailyMetrics.caloriesIntake += caloriesIntake || 0;
      dashboard.caloriesIntakeGoal = req.body.caloriesIntakeGoal || dashboard.caloriesIntakeGoal; // Update if provided
    }

    await dashboard.save();
    res.json(dashboard); 
  } catch (err) {
    console.error('Error updating daily metrics:', err.message);
    res.status(500).send('Server Error');
  }
};

export default updateDailyMetrics ;
