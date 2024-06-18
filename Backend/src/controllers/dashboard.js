import Dashboard, { getCurrentDate } from "../models/dashboard.js";

// Function to sanitize and validate metrics
const sanitizeAndValidateMetrics = (metrics) => {
  const sanitizedMetrics = {};

  // Sanitize and validate caloriesBurned
  sanitizedMetrics.caloriesBurned = parseFloat(metrics.caloriesBurned);
  if (isNaN(sanitizedMetrics.caloriesBurned)) {
    throw new Error('Invalid value for caloriesBurned');
  }

  // Sanitize and validate workoutsCompleted
  sanitizedMetrics.workoutsCompleted = parseInt(metrics.workoutsCompleted);
  if (isNaN(sanitizedMetrics.workoutsCompleted)) {
    throw new Error('Invalid value for workoutsCompleted');
  }

  // Sanitize and validate caloriesIntake
  sanitizedMetrics.caloriesIntake = parseFloat(metrics.caloriesIntake);
  if (isNaN(sanitizedMetrics.caloriesIntake)) {
    throw new Error('Invalid value for caloriesIntake');
  }

  return sanitizedMetrics;
};

const updateDailyMetrics = async (req, res) => {
  const userId = req.user.id; // userId obtained from authentication middleware
  const { caloriesBurned, workoutsCompleted, caloriesIntake } = req.body; // Data to update from request body

  try {
    const validMetrics = sanitizeAndValidateMetrics({
      caloriesBurned,
      workoutsCompleted,
      caloriesIntake,
    });

    let dashboard = await Dashboard.findOne({ userId });
    
    if (!dashboard) {
      // Create new dashboard entry if not exists
      dashboard = new Dashboard({
        userId,
        dailyMetrics: {
          date: getCurrentDate(),
          caloriesBurned: validMetrics.caloriesBurned || 0,
          workoutsCompleted: validMetrics.workoutsCompleted || 0,
          caloriesIntake: validMetrics.caloriesIntake || 0,
        },
        caloriesIntakeGoal: req.body.caloriesIntakeGoal || 0,
      });
    } else {
      // Update existing dashboard entry
      dashboard.dailyMetrics.caloriesBurned += validMetrics.caloriesBurned || 0;
      dashboard.dailyMetrics.workoutsCompleted += validMetrics.workoutsCompleted || 0;
      dashboard.dailyMetrics.caloriesIntake += validMetrics.caloriesIntake || 0;
      dashboard.caloriesIntakeGoal = req.body.caloriesIntakeGoal || dashboard.caloriesIntakeGoal; // Update if provided
    }

    await dashboard.save();
    res.json(dashboard);
  } catch (error) {
    console.error('Error updating daily metrics:', error.message);
    res.status(500).send('Server Error');
  }
};

export default updateDailyMetrics;
