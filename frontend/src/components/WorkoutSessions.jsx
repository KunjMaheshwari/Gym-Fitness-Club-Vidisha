import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
        Transform your fitness journey with our expert-led HIIT sessions, designed to maximize calorie burn and boost endurance. Achieve peak performance with our personalized strength training routines tailored to your individual goals.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
        Elevate your fitness game with our exclusive Bootcamp, where intensity meets results.
        </p>
        <div className="bootcamps">
          <div>
            <h4>Transform Your Fitness Journey</h4>
            <p>
            Elevate your fitness journey with our expertly designed bootcamp sessions, tailored to push your limits and achieve transformative results. Each session blends high-intensity interval training (HIIT) with strength and conditioning exercises, ensuring a comprehensive workout that targets all muscle groups.
            </p>
          </div>
          <div>
            <h4>Expert Guidance and Motivation</h4>
            <p>
            Our featured bootcamp is led by seasoned trainers who bring a wealth of experience and knowledge to every session. They are dedicated to providing personalized attention, adjusting exercises to fit your fitness level, and ensuring you perform each movement correctly to maximize benefits and prevent injury.
            </p>
          </div>
          <div>
            <h4>Comprehensive and Varied Workouts</h4>
            <p>
            Variety is the key to keeping workouts exciting and effective, and our bootcamp is designed with this principle in mind. Each session is different, incorporating a mix of cardio, strength training, and flexibility exercises to keep your body guessing and prevent plateau
            </p>
          </div>
          <div>
            <h4>Community and Camaraderie</h4>
            <p>
            Joining our featured bootcamp means becoming part of a vibrant, supportive community. The camaraderie among participants creates an uplifting atmosphere where everyone encourages each other to push harder and achieve their best.
            </p>
          </div>
          <div>
            <h4>Track Your Progress and Celebrate Success</h4>
            <p>
            In our featured bootcamp, we believe that tracking progress and celebrating milestones are crucial components of a successful fitness journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
