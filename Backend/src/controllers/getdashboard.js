import Dashboard from "../models/dashboard.js";

const getDashboardMetrics = async (req, res) => {
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
        metricsHistory: [], // Assuming this is the correct initial structure
      });
      await dashboard.save();
    }

    res.json(dashboard.metricsHistory);
  } catch (err) {
    console.error('Error fetching dashboard metrics:', err.message);
    res.status(500).send('Server Error');
  }
};

export { getDashboardMetrics };