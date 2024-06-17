import Dashboard, { getCurrentDate } from "../models/dashboard.js";

// Get daily dashboard metrics
const getDailyDashboardMetrics = async (req, res) => {
  const userId = req.user.id;

  try {
    let dashboard = await Dashboard.findOne({ userId });

    if (!dashboard) {
      // Create a new dashboard if none exists
      dashboard = new Dashboard({
        userId,
        dailyMetrics: {
          date: getCurrentDate(),
          caloriesBurned: 0,
          workoutsCompleted: 0,
          caloriesIntake: 0,
        },
        caloriesIntakeGoal: 0,
      });
      await dashboard.save();
    }

    const response = {
      dailyMetrics: dashboard.dailyMetrics,
      caloriesIntakeGoal: dashboard.caloriesIntakeGoal,
    };

    res.json(response);
  } catch (err) {
    console.error('Error fetching daily dashboard metrics:', err.message);
    res.status(500).send('Server Error');
  }
};

export default getDailyDashboardMetrics;
