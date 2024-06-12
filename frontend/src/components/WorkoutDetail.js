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
      { name: 'Brain Games', image: '/images/exercises/brain-games.jpg' }
    ]
  },
  2: {
    name: 'Yoga Workout',
    exercises: [
      { name: 'Sun Salutation', image: '/images/exercises/sun-salutation.jpg' },
      { name: 'Tree Pose', image: '/images/exercises/tree-pose.jpg' },
      { name: 'Downward Dog', image: '/images/exercises/downward-dog.jpg' },
      { name: 'Child\'s Pose', image: '/images/exercises/child-pose.jpg' }
    ]
  },
  3: {
    name: 'Cardio Workout',
    exercises: [
      { name: 'Running', image: '/images/exercises/running.jpg' },
      { name: 'Jumping Jacks', image: '/images/exercises/jumping-jacks.jpg' },
      { name: 'Burpees', image: '/images/exercises/burpees.jpg' },
      { name: 'Mountain Climbers', image: '/images/exercises/mountain-climbers.jpg' }
    ]
  },
  4: {
    name: 'Strength Training',
    exercises: [
      { name: 'Push-ups', image: '/images/exercises/push-ups.jpg' },
      { name: 'Squats', image: '/images/exercises/squats.jpg' },
      { name: 'Deadlifts', image: '/images/exercises/deadlifts.jpg' },
      { name: 'Bench Press', image: '/images/exercises/bench-press.jpg' }
    ]
  },
  5: {
    name: 'HIIT Workout',
    exercises: [
      { name: 'High Knees', image: '/images/exercises/high-knees.jpg' },
      { name: 'Jump Squats', image: '/images/exercises/jump-squats.jpg' },
      { name: 'Plank Jacks', image: '/images/exercises/plank-jacks.jpg' },
      { name: 'Sprints', image: '/images/exercises/sprints.jpg' }
    ]
  },
  6: {
    name: 'Pilates Workout',
    exercises: [
      { name: 'Hundred', image: '/images/exercises/hundred.jpg' },
      { name: 'Roll Up', image: '/images/exercises/roll-up.jpg' },
      { name: 'Leg Circles', image: '/images/exercises/leg-circles.jpg' },
      { name: 'Criss Cross', image: '/images/exercises/criss-cross.jpg' }
    ]
  },
  7: {
    name: 'Dance Workout',
    exercises: [
      { name: 'Zumba', image: '/images/exercises/zumba.jpg' },
      { name: 'Hip Hop', image: '/images/exercises/hip-hop.jpg' },
      { name: 'Jazzercise', image: '/images/exercises/jazzercise.jpg' },
      { name: 'Salsa', image: '/images/exercises/salsa.jpg' }
    ]
  },
  8: {
    name: 'CrossFit Workout',
    exercises: [
      { name: 'Box Jumps', image: '/images/exercises/box-jumps.jpg' },
      { name: 'Kettlebell Swings', image: '/images/exercises/kettlebell-swings.jpg' },
      { name: 'Pull-Ups', image: '/images/exercises/pull-ups.jpg' },
      { name: 'Wall Balls', image: '/images/exercises/wall-balls.jpg' }
    ]
  },
  9: {
    name: 'Kickboxing Workout',
    exercises: [
      { name: 'Jab-Cross', image: '/images/exercises/jab-cross.jpg' },
      { name: 'Front Kick', image: '/images/exercises/front-kick.jpg' },
      { name: 'Roundhouse Kick', image: '/images/exercises/roundhouse-kick.jpg' },
      { name: 'Uppercut', image: '/images/exercises/uppercut.jpg' }
    ]
  },
  10: {
    name: 'Flexibility Workout',
    exercises: [
      { name: 'Hamstring Stretch', image: '/images/exercises/hamstring-stretch.jpg' },
      { name: 'Quad Stretch', image: '/images/exercises/quad-stretch.jpg' },
      { name: 'Shoulder Stretch', image: '/images/exercises/shoulder-stretch.jpg' },
      { name: 'Hip Flexor Stretch', image: '/images/exercises/hip-flexor-stretch.jpg' }
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
