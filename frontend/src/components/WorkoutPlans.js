import React from 'react';
import { Link } from 'react-router-dom';
import './WorkoutPlans.css';

const WorkoutPlans = () => {
  const plans = [
    {
      id: 1,
      name: 'Mind Workout',
      description: 'Exercises to boost mental fitness.',
      backgroundImage: '/images/mind-workout.jpg'
    },
    {
      id: 2,
      name: 'Yoga Workout',
      description: 'A series of yoga poses to improve flexibility and relaxation.',
      backgroundImage: '/images/yoga-workout.jpg'
    },
    {
      id: 3,
      name: 'Cardio Workout',
      description: 'High-energy exercises to get your heart pumping.',
      backgroundImage: '/images/cardio-workout.jpg'
    },
    {
      id: 4,
      name: 'Strength Training',
      description: 'Workouts to build muscle and strength.',
      backgroundImage: '/images/strength-training.jpg'
    },
    {
      id: 5,
      name: 'HIIT Workout',
      description: 'High-Intensity Interval Training for maximum fat burning.',
      backgroundImage: '/images/hiit-workout.jpg'
    },
    {
      id: 6,
      name: 'Pilates Workout',
      description: 'Core-focused exercises to improve posture and flexibility.',
      backgroundImage: '/images/pilates-workout.jpg'
    },
    {
      id: 7,
      name: 'Dance Workout',
      description: 'Fun dance routines to get you moving and grooving.',
      backgroundImage: '/images/dance-workout.jpg'
    },
    {
      id: 8,
      name: 'CrossFit Workout',
      description: 'Intense workouts to improve strength, conditioning, and endurance.',
      backgroundImage: '/images/crossfit-workout.jpg'
    },
    {
      id: 9,
      name: 'Kickboxing Workout',
      description: 'Combining martial arts techniques with cardio for a high-energy workout.',
      backgroundImage: '/images/kickboxing-workout.jpg'
    },
    {
      id: 10,
      name: 'Flexibility Workout',
      description: 'Stretching exercises to improve overall flexibility and range of motion.',
      backgroundImage: '/images/flexibility-workout.jpg'
    }
  ];

  return (
    <div>
      <h1>Workout Plans</h1>
      <div className="plans-container">
        {plans.map(plan => (
          <Link to={`/plan/${plan.id}`} key={plan.id}>
            <div className="workout-plan" style={{ backgroundImage: `url(${plan.backgroundImage})` }}>
              <h2>{plan.name}</h2>
              <p>{plan.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlans;
