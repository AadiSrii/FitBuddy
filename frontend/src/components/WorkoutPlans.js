import React from 'react';
import { Link } from 'react-router-dom';
import './WorkoutPlans.css';

const WorkoutPlans = () => {
  const plans = [
    {
      id: 1,
      name: 'Mind Workout',
      description: 'Exercises to boost mental fitness.',
      backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHcEG2Y4_R7h9URQcTnEGkridS-98cQjGQcOsEh8LiWqLTWFXDEZ_beLjnTY3jBijILo&usqp=CAU'
    },
    {
      id: 2,
      name: 'Yoga Workout',
      description: 'A series of yoga poses to improve flexibility and relaxation.',
      backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4T6E0xkLyx9o8jTWgvpXX3AwYw9J6uy_SlQ&s'
    },
    {
      id: 3,
      name: 'Cardio Workout',
      description: 'High-energy exercises to get your heart pumping.',
      backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYvD3KABUywuvQjJUmdHx7Z4IgCYOZg279xw&s'
    },
    {
      id: 4,
      name: 'Strength Training',
      description: 'Workouts to build muscle and strength.',
      backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4htwIlF7KyhZU6DzVkAB04p2hAe-Kq6b2Qw&s'
    },
    {
      id: 5,
      name: 'HIIT Workout',
      description: 'High-Intensity Interval Training for maximum fat burning.',
      backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWFAE9yN3cS6Bfhq9gCXGhZHbD_6WoHOCRCw&s'
    },
    {
      id: 6,
      name: 'Pilates Workout',
      description: 'Core-focused exercises to improve posture and flexibility.',
      backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5MhBAlzOyeUimRuPFaKPj81-Wpb4MlRabg&s'
    },
    {
      id: 7,
      name: 'Dance Workout',
      description: 'Fun dance routines to get you moving and grooving.',
      backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB0VHdbg48TlVdCZjrCb5x0wg64HH9CDnwwQ&s'
    },
    {
      id: 8,
      name: 'CrossFit Workout',
      description: 'Intense workouts to improve strength, conditioning, and endurance.',
      backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt75QE_Xpc48cqjzwOia6LMeFSU6rSVBXmLw&s'
    },
    {
      id: 9,
      name: 'Kickboxing Workout',
      description: 'Combining martial arts techniques with cardio for a high-energy workout.',
      backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr-6Ov_Fx1njvUsrKRmyXkjC5rzYbQCz5gUw&s'
    },
    {
      id: 10,
      name: 'Flexibility Workout',
      description: 'Stretching exercises to improve overall flexibility and range of motion.',
      backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejy9qgQCQ1Wc-0uzzWo8OweKGgA5nuI3XWw&s'
    },
    {
        id: 11,
        name: 'Bodyweight Workout',
        description: 'Exercises that use your own body weight for resistance.',
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLaEf_7bLvlLtiL0yAF3BHolJRVmxq7VTk3A&s'
      },
      {
        id: 12,
        name: 'Bootcamp Workout',
        description: 'High-intensity group training sessions.',
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzqE-t0Z-e2fAkhekV9BRIH_mYvtMNxsmMZg&s'
      },
      {
        id: 13,
        name: 'Cycling Workout',
        description: 'Workouts to improve endurance and leg strength.',
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTubAVdh-CJ6I5vki6yO93JVvIFZntuPGAV5w&s'
      },
      {
        id: 14,
        name: 'Swimming Workout',
        description: 'Low-impact workouts that are easy on the joints.',
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9H2ubBN7TPSQHVhodnTK8Jo2wywyBTv_Pw&s'
      },
      {
        id: 15,
        name: 'Core Workout',
        description: 'Exercises to strengthen the core muscles.',
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1ei4wVUyBwrHaVhhn87BgwI8rbwOtNqFfA&s'
      },
      {
        id: 16,
        name: 'Outdoor Workout',
        description: 'Exercises you can do in the great outdoors.',
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAovqqxx7cjC1yleBJqPGCKWaoZtH_9JYmQA&s'
      },
      {
        id: 17,
        name: 'Balance Workout',
        description: 'Exercises to improve balance and stability.',
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3UlJ4iomwTuLSx9zR2RpkJKi8yl6Uv75HQg&s'
      },
      {
        id: 18,
        name: 'Mobility Workout',
        description: 'Exercises to improve joint mobility and flexibility.',
        backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHx8HY3q4p-IB_POuf0EMjgLwzqXfcwt5iTA&s'
      }
      
  ];

  return (
    <div>
      <div className='head'>
        <h1>CHALLENGE YOURSELF: Power Up Your Fitness Journey
        </h1>
        <p>Join challenges to set goals, push your limits, and cheer on your workout buddies. Don't miss out on the chance to win prizes—start your challenge today!</p>
    </div>
      <div className="plans-container">
        {plans.map(plan => (
          <Link to={`/workout/${plan.id}`} key={plan.id}> {/* Ensure 'to' attribute is correctly defined */}
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
