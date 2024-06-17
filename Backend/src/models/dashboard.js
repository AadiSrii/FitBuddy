import mongoose from 'mongoose';

export const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

const DailyMetricsSchema = new mongoose.Schema({
  date: {
    type: String,
    default: getCurrentDate(),
  },
  caloriesBurned: {
    type: Number,
    default: 0,
  },
  workoutsCompleted: {
    type: Number,
    default: 0,
  },
  caloriesIntake: {
    type: Number,
    default: 0,
  },

});

const DashboardSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  dailyMetrics: {
    type: DailyMetricsSchema,
    default: {
        date: getCurrentDate(),
      caloriesBurned: 0,
      workoutsCompleted: 0,
      caloriesIntake: 0,
    },
  },
  metricsHistory: [DailyMetricsSchema],
  caloriesIntakeGoal: {
    type: Number,
    default: 0,
  },
  // Other fields as per your application's requirements
});

const Dashboard = mongoose.model('Dashboard', DashboardSchema);
export default Dashboard;
