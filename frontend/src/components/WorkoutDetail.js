import React from 'react';
import { useParams } from 'react-router-dom';
import './WorkoutDetail.css';

const workoutDetails = {
    1: {
      name: 'Mind Workout',
      exercises: [
        { name: 'Meditation', image: '/images/exercises/meditation.jpg' },
        { name: 'Reading', image: '/images/exercises/reading.jpg' },
        { name: 'Puzzles', image: '/images/exercises/puzzles.jpg' },
        { name: 'Brain Games', image: '/images/exercises/brain-games.jpg' },
        { name: 'Memory Exercises', image: '/images/exercises/memory-exercises.jpg' },
        { name: 'Visualization', image: '/images/exercises/visualization.jpg' },
        { name: 'Mind Mapping', image: '/images/exercises/mind-mapping.jpg' },
        { name: 'Creative Writing', image: '/images/exercises/creative-writing.jpg' },
        { name: 'Strategy Games', image: '/images/exercises/strategy-games.jpg' },
        { name: 'Sudoku', image: '/images/exercises/sudoku.jpg' },
        { name: 'Chess', image: '/images/exercises/chess.jpg' },
        { name: 'Crossword Puzzles', image: '/images/exercises/crossword-puzzles.jpg' }
      ]
    },
    2: {
      name: 'Yoga Workout',
      exercises: [
        { name: 'Sun Salutation', image: '/images/exercises/sun-salutation.jpg' },
        { name: 'Tree Pose', image: '/images/exercises/tree-pose.jpg' },
        { name: 'Downward Dog', image: '/images/exercises/downward-dog.jpg' },
        { name: 'Child\'s Pose', image: '/images/exercises/child-pose.jpg' },
        { name: 'Warrior Pose', image: '/images/exercises/warrior-pose.jpg' },
        { name: 'Triangle Pose', image: '/images/exercises/triangle-pose.jpg' },
        { name: 'Bridge Pose', image: '/images/exercises/bridge-pose.jpg' },
        { name: 'Cobra Pose', image: '/images/exercises/cobra-pose.jpg' },
        { name: 'Seated Forward Bend', image: '/images/exercises/seated-forward-bend.jpg' },
        { name: 'Boat Pose', image: '/images/exercises/boat-pose.jpg' },
        { name: 'Camel Pose', image: '/images/exercises/camel-pose.jpg' },
        { name: 'Pigeon Pose', image: '/images/exercises/pigeon-pose.jpg' }
      ]
    },
    3: {
      name: 'Cardio Workout',
      exercises: [
        { name: 'Running', image: '/images/exercises/running.jpg' },
        { name: 'Jumping Jacks', image: '/images/exercises/jumping-jacks.jpg' },
        { name: 'Burpees', image: '/images/exercises/burpees.jpg' },
        { name: 'Mountain Climbers', image: '/images/exercises/mountain-climbers.jpg' },
        { name: 'High Knees', image: '/images/exercises/high-knees.jpg' },
        { name: 'Butt Kicks', image: '/images/exercises/butt-kicks.jpg' },
        { name: 'Skaters', image: '/images/exercises/skaters.jpg' },
        { name: 'Tuck Jumps', image: '/images/exercises/tuck-jumps.jpg' },
        { name: 'Jump Rope', image: '/images/exercises/jump-rope.jpg' },
        { name: 'Sprint Intervals', image: '/images/exercises/sprint-intervals.jpg' },
        { name: 'Box Jumps', image: '/images/exercises/box-jumps.jpg' },
        { name: 'Bear Crawls', image: '/images/exercises/bear-crawls.jpg' }
      ]
    },
    4: {
      name: 'Strength Training',
      exercises: [
        { name: 'Push-ups', image: '/images/exercises/push-ups.jpg' },
        { name: 'Squats', image: '/images/exercises/squats.jpg' },
        { name: 'Deadlifts', image: '/images/exercises/deadlifts.jpg' },
        { name: 'Bench Press', image: '/images/exercises/bench-press.jpg' },
        { name: 'Pull-Ups', image: '/images/exercises/pull-ups.jpg' },
        { name: 'Bicep Curls', image: '/images/exercises/bicep-curls.jpg' },
        { name: 'Tricep Dips', image: '/images/exercises/tricep-dips.jpg' },
        { name: 'Lunges', image: '/images/exercises/lunges.jpg' },
        { name: 'Shoulder Press', image: '/images/exercises/shoulder-press.jpg' },
        { name: 'Leg Press', image: '/images/exercises/leg-press.jpg' },
        { name: 'Calf Raises', image: '/images/exercises/calf-raises.jpg' },
        { name: 'Lat Pulldowns', image: '/images/exercises/lat-pulldowns.jpg' }
      ]
    },
    5: {
      name: 'HIIT Workout',
      exercises: [
        { name: 'High Knees', image: '/images/exercises/high-knees.jpg' },
        { name: 'Jump Squats', image: '/images/exercises/jump-squats.jpg' },
        { name: 'Plank Jacks', image: '/images/exercises/plank-jacks.jpg' },
        { name: 'Sprints', image: '/images/exercises/sprints.jpg' },
        { name: 'Burpees', image: '/images/exercises/burpees.jpg' },
        { name: 'Mountain Climbers', image: '/images/exercises/mountain-climbers.jpg' },
        { name: 'Butt Kicks', image: '/images/exercises/butt-kicks.jpg' },
        { name: 'Tuck Jumps', image: '/images/exercises/tuck-jumps.jpg' },
        { name: 'Jump Rope', image: '/images/exercises/jump-rope.jpg' },
        { name: 'Lateral Shuffles', image: '/images/exercises/lateral-shuffles.jpg' },
        { name: 'Star Jumps', image: '/images/exercises/star-jumps.jpg' },
        { name: 'Box Jumps', image: '/images/exercises/box-jumps.jpg' }
      ]
    },
    6: {
      name: 'Pilates Workout',
      exercises: [
        { name: 'Hundred', image: '/images/exercises/hundred.jpg' },
        { name: 'Roll Up', image: '/images/exercises/roll-up.jpg' },
        { name: 'Leg Circles', image: '/images/exercises/leg-circles.jpg' },
        { name: 'Criss Cross', image: '/images/exercises/criss-cross.jpg' },
        { name: 'Single Leg Stretch', image: '/images/exercises/single-leg-stretch.jpg' },
        { name: 'Double Leg Stretch', image: '/images/exercises/double-leg-stretch.jpg' },
        { name: 'Scissor Kicks', image: '/images/exercises/scissor-kicks.jpg' },
        { name: 'Teaser', image: '/images/exercises/teaser.jpg' },
        { name: 'Swan Dive', image: '/images/exercises/swan-dive.jpg' },
        { name: 'Swimming', image: '/images/exercises/swimming.jpg' },
        { name: 'Side Kick Series', image: '/images/exercises/side-kick-series.jpg' },
        { name: 'Mermaid Stretch', image: '/images/exercises/mermaid-stretch.jpg' }
      ]
    },
    7: {
      name: 'Dance Workout',
      exercises: [
        { name: 'Zumba', image: '/images/exercises/zumba.jpg' },
        { name: 'Hip Hop', image: '/images/exercises/hip-hop.jpg' },
        { name: 'Jazzercise', image: '/images/exercises/jazzercise.jpg' },
        { name: 'Salsa', image: '/images/exercises/salsa.jpg' },
        { name: 'Ballet', image: '/images/exercises/ballet.jpg' },
        { name: 'Swing', image: '/images/exercises/swing.jpg' },
        { name: 'Tap Dance', image: '/images/exercises/tap-dance.jpg' },
        { name: 'Line Dance', image: '/images/exercises/line-dance.jpg' },
        { name: 'Funk', image: '/images/exercises/funk.jpg' },
        { name: 'Disco', image: '/images/exercises/disco.jpg' },
        { name: 'Breakdance', image: '/images/exercises/breakdance.jpg' },
        { name: 'Contemporary Dance', image: '/images/exercises/contemporary-dance.jpg' }
      ]
    },
    8: {
      name: 'CrossFit Workout',
      exercises: [
        { name: 'Box Jumps', image: '/images/exercises/box-jumps.jpg' },
        { name: 'Kettlebell Swings', image: '/images/exercises/kettlebell-swings.jpg' },
        { name: 'Pull-Ups', image: '/images/exercises/pull-ups.jpg' },
        { name: 'Wall Balls', image: '/images/exercises/wall-balls.jpg' },
        { name: 'Deadlifts', image: '/images/exercises/deadlifts.jpg' },
        { name: 'Push Press', image: '/images/exercises/push-press.jpg' },
        { name: 'Clean and Jerk', image: '/images/exercises/clean-and-jerk.jpg' },
        { name: 'Snatch', image: '/images/exercises/snatch.jpg' },
        { name: 'Thrusters', image: '/images/exercises/thrusters.jpg' },
        { name: 'Double Unders', image: '/images/exercises/double-unders.jpg' },
        { name: 'Handstand Push-Ups', image: '/images/exercises/handstand-push-ups.jpg' },
        { name: 'Rope Climbs', image: '/images/exercises/rope-climbs.jpg' }
      ]
    },
    9: {
      name: 'Kickboxing Workout',
      exercises: [
        { name: 'Jab-Cross', image: '/images/exercises/jab-cross.jpg' },
        { name: 'Front Kick', image: '/images/exercises/front-kick.jpg' },
        { name: 'Roundhouse Kick', image: '/images/exercises/roundhouse-kick.jpg' },
        { name: 'Uppercut', image: '/images/exercises/uppercut.jpg' },
        { name: 'Hook Punch', image: '/images/exercises/hook-punch.jpg' },
        { name: 'Side Kick', image: '/images/exercises/side-kick.jpg' },
        { name: 'Back Kick', image: '/images/exercises/back-kick.jpg' },
        { name: 'Elbow Strike', image: '/images/exercises/elbow-strike.jpg' },
        { name: 'Knee Strike', image: '/images/exercises/knee-strike.jpg' },
        { name: 'Spinning Back Fist', image: '/images/exercises/spinning-back-fist.jpg' },
        { name: 'Flying Knee', image: '/images/exercises/flying-knee.jpg' },
        { name: 'Superman Punch', image: '/images/exercises/superman-punch.jpg' }
      ]
    },
    10: {
      name: 'Flexibility Workout',
      exercises: [
        { name: 'Hamstring Stretch', image: '/images/exercises/hamstring-stretch.jpg' },
        { name: 'Quad Stretch', image: '/images/exercises/quad-stretch.jpg' },
        { name: 'Shoulder Stretch', image: '/images/exercises/shoulder-stretch.jpg' },
        { name: 'Hip Flexor Stretch', image: '/images/exercises/hip-flexor-stretch.jpg' },
        { name: 'Calf Stretch', image: '/images/exercises/calf-stretch.jpg' },
        { name: 'Chest Stretch', image: '/images/exercises/chest-stretch.jpg' },
        { name: 'Upper Back Stretch', image: '/images/exercises/upper-back-stretch.jpg' },
        { name: 'Lower Back Stretch', image: '/images/exercises/lower-back-stretch.jpg' },
        { name: 'Side Stretch', image: '/images/exercises/side-stretch.jpg' },
        { name: 'Inner Thigh Stretch', image: '/images/exercises/inner-thigh-stretch.jpg' },
        { name: 'Neck Stretch', image: '/images/exercises/neck-stretch.jpg' },
        { name: 'Wrist Stretch', image: '/images/exercises/wrist-stretch.jpg' }
      ]
    },
    11: {
      name: 'Bodyweight Workout',
      exercises: [
        { name: 'Push-ups', image: '/images/exercises/push-ups.jpg' },
        { name: 'Squats', image: '/images/exercises/squats.jpg' },
        { name: 'Lunges', image: '/images/exercises/lunges.jpg' },
        { name: 'Plank', image: '/images/exercises/plank.jpg' },
        { name: 'Burpees', image: '/images/exercises/burpees.jpg' },
        { name: 'Mountain Climbers', image: '/images/exercises/mountain-climbers.jpg' },
        { name: 'Dips', image: '/images/exercises/dips.jpg' },
        { name: 'Leg Raises', image: '/images/exercises/leg-raises.jpg' },
        { name: 'Bicycle Crunches', image: '/images/exercises/bicycle-crunches.jpg' },
        { name: 'Supermans', image: '/images/exercises/supermans.jpg' },
        { name: 'Tricep Dips', image: '/images/exercises/tricep-dips.jpg' },
        { name: 'Jumping Jacks', image: '/images/exercises/jumping-jacks.jpg' }
      ]
    },
    12: {
      name: 'Bootcamp Workout',
      exercises: [
        { name: 'Push-ups', image: '/images/exercises/push-ups.jpg' },
        { name: 'Sit-ups', image: '/images/exercises/sit-ups.jpg' },
        { name: 'Jumping Jacks', image: '/images/exercises/jumping-jacks.jpg' },
        { name: 'Burpees', image: '/images/exercises/burpees.jpg' },
        { name: 'Squats', image: '/images/exercises/squats.jpg' },
        { name: 'Lunges', image: '/images/exercises/lunges.jpg' },
        { name: 'Mountain Climbers', image: '/images/exercises/mountain-climbers.jpg' },
        { name: 'Bear Crawls', image: '/images/exercises/bear-crawls.jpg' },
        { name: 'Plank', image: '/images/exercises/plank.jpg' },
        { name: 'High Knees', image: '/images/exercises/high-knees.jpg' },
        { name: 'Sprints', image: '/images/exercises/sprints.jpg' },
        { name: 'Box Jumps', image: '/images/exercises/box-jumps.jpg' }
      ]
    },
    13: {
      name: 'Cycling Workout',
      exercises: [
        { name: 'Warm-up Ride', image: '/images/exercises/warm-up-ride.jpg' },
        { name: 'Hill Climb', image: '/images/exercises/hill-climb.jpg' },
        { name: 'Sprints', image: '/images/exercises/sprints.jpg' },
        { name: 'Endurance Ride', image: '/images/exercises/endurance-ride.jpg' },
        { name: 'Intervals', image: '/images/exercises/intervals.jpg' },
        { name: 'Cool Down', image: '/images/exercises/cool-down.jpg' },
        { name: 'Cadence Drills', image: '/images/exercises/cadence-drills.jpg' },
        { name: 'Single-Leg Drills', image: '/images/exercises/single-leg-drills.jpg' },
        { name: 'Standing Ride', image: '/images/exercises/standing-ride.jpg' },
        { name: 'Seated Climb', image: '/images/exercises/seated-climb.jpg' },
        { name: 'Tempo Ride', image: '/images/exercises/tempo-ride.jpg' },
        { name: 'Power Sprints', image: '/images/exercises/power-sprints.jpg' }
      ]
    },
    14: {
      name: 'Swimming Workout',
      exercises: [
        { name: 'Freestyle', image: '/images/exercises/freestyle.jpg' },
        { name: 'Backstroke', image: '/images/exercises/backstroke.jpg' },
        { name: 'Breaststroke', image: '/images/exercises/breaststroke.jpg' },
        { name: 'Butterfly', image: '/images/exercises/butterfly.jpg' },
        { name: 'Kick Drills', image: '/images/exercises/kick-drills.jpg' },
        { name: 'Pull Drills', image: '/images/exercises/pull-drills.jpg' },
        { name: 'Flip Turns', image: '/images/exercises/flip-turns.jpg' },
        { name: 'Sprint Intervals', image: '/images/exercises/sprint-intervals.jpg' },
        { name: 'Endurance Swims', image: '/images/exercises/endurance-swims.jpg' },
        { name: 'Treading Water', image: '/images/exercises/treading-water.jpg' },
        { name: 'Dolphin Kicks', image: '/images/exercises/dolphin-kicks.jpg' },
        { name: 'Open Water Swims', image: '/images/exercises/open-water-swims.jpg' }
      ]
    },
    15: {
      name: 'Core Workout',
      exercises: [
        { name: 'Crunches', image: '/images/exercises/crunches.jpg' },
        { name: 'Russian Twists', image: '/images/exercises/russian-twists.jpg' },
        { name: 'Leg Raises', image: '/images/exercises/leg-raises.jpg' },
        { name: 'Plank', image: '/images/exercises/plank.jpg' },
        { name: 'Mountain Climbers', image: '/images/exercises/mountain-climbers.jpg' },
        { name: 'Flutter Kicks', image: '/images/exercises/flutter-kicks.jpg' },
        { name: 'Side Plank', image: '/images/exercises/side-plank.jpg' },
        { name: 'Bicycle Crunches', image: '/images/exercises/bicycle-crunches.jpg' },
        { name: 'Hanging Leg Raises', image: '/images/exercises/hanging-leg-raises.jpg' },
        { name: 'Toe Touches', image: '/images/exercises/toe-touches.jpg' },
        { name: 'V-Ups', image: '/images/exercises/v-ups.jpg' },
        { name: 'Sit-Ups', image: '/images/exercises/sit-ups.jpg' }
      ]
    },
    16: {
      name: 'Outdoor Workout',
      exercises: [
        { name: 'Trail Running', image: '/images/exercises/trail-running.jpg' },
        { name: 'Hill Sprints', image: '/images/exercises/hill-sprints.jpg' },
        { name: 'Park Bench Dips', image: '/images/exercises/park-bench-dips.jpg' },
        { name: 'Tree Pull-Ups', image: '/images/exercises/tree-pull-ups.jpg' },
        { name: 'Stair Climbs', image: '/images/exercises/stair-climbs.jpg' },
        { name: 'Beach Running', image: '/images/exercises/beach-running.jpg' },
        { name: 'Rock Climbing', image: '/images/exercises/rock-climbing.jpg' },
        { name: 'Bike Riding', image: '/images/exercises/bike-riding.jpg' },
        { name: 'Outdoor Yoga', image: '/images/exercises/outdoor-yoga.jpg' },
        { name: 'Kayaking', image: '/images/exercises/kayaking.jpg' },
        { name: 'Stand-Up Paddleboarding', image: '/images/exercises/stand-up-paddleboarding.jpg' },
        { name: 'Outdoor Circuit Training', image: '/images/exercises/outdoor-circuit-training.jpg' }
      ]
    },
    17: {
      name: 'Balance Workout',
      exercises: [
        { name: 'Single Leg Stand', image: '/images/exercises/single-leg-stand.jpg' },
        { name: 'Heel-to-Toe Walk', image: '/images/exercises/heel-to-toe-walk.jpg' },
        { name: 'Balance Board', image: '/images/exercises/balance-board.jpg' },
        { name: 'Yoga Tree Pose', image: '/images/exercises/yoga-tree-pose.jpg' },
        { name: 'Bosu Ball Squats', image: '/images/exercises/bosu-ball-squats.jpg' },
        { name: 'Single Leg Deadlift', image: '/images/exercises/single-leg-deadlift.jpg' },
        { name: 'Side Leg Raises', image: '/images/exercises/side-leg-raises.jpg' },
        { name: 'Tai Chi', image: '/images/exercises/tai-chi.jpg' },
        { name: 'Stability Ball Exercises', image: '/images/exercises/stability-ball-exercises.jpg' },
        { name: 'Skater Hops', image: '/images/exercises/skater-hops.jpg' },
        { name: 'Lunges', image: '/images/exercises/lunges.jpg' },
        { name: 'Balance Beam Walk', image: '/images/exercises/balance-beam-walk.jpg' }
      ]
    },
    18: {
      name: 'Mobility Workout',
      exercises: [
        { name: 'Hip Circles', image: '/images/exercises/hip-circles.jpg' },
        { name: 'Arm Circles', image: '/images/exercises/arm-circles.jpg' },
        { name: 'Shoulder Rolls', image: '/images/exercises/shoulder-rolls.jpg' },
        { name: 'Ankle Circles', image: '/images/exercises/ankle-circles.jpg' },
        { name: 'Spinal Twists', image: '/images/exercises/spinal-twists.jpg' },
        { name: 'Wrist Circles', image: '/images/exercises/wrist-circles.jpg' },
        { name: 'Cat-Cow Stretch', image: '/images/exercises/cat-cow-stretch.jpg' },
        { name: 'Hip Flexor Stretch', image: '/images/exercises/hip-flexor-stretch.jpg' },
        { name: 'Hamstring Stretch', image: '/images/exercises/hamstring-stretch.jpg' },
        { name: 'Quad Stretch', image: '/images/exercises/quad-stretch.jpg' },
        { name: 'Shoulder Stretch', image: '/images/exercises/shoulder-stretch.jpg' },
        { name: 'Dynamic Lunges', image: '/images/exercises/dynamic-lunges.jpg' }
      ]
    }
  };
  

const WorkoutDetail = () => {
  const { id } = useParams();
  const plan = workoutDetails[id];

  return (
    <div>
      <h1>{plan.name}</h1>
      <div className="exercise-list">
        {plan.exercises.map((exercise, index) => (
          <div key={index} className="exercise-item">
            <img src={exercise.image} alt={exercise.name} className="exercise-image" />
            <p>{exercise.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutDetail;
