import React, { useState, useRef, useEffect } from 'react';

export default function Workout({ title, description, time, onComplete }) {
  // keep a ref to the timer id so each instance manages its own timeout
  const timerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  function handleStartWorkout() {
    // clear any existing timer before starting a new one
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setIsRunning(true);
    timerRef.current = setTimeout(() => {
      alert(`Time's up for ${title}!`);
      handleStopWorkout();
    }, time);
  }

  function handleStopWorkout() {
    // stop the timer if it exists
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setIsRunning(false);
    onComplete();
  }


  return (
    <article className="workout">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{time}</p>
      {isRunning && <p className="running">🔄 Running...</p>}
      <p>
        <button onClick={handleStartWorkout} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStopWorkout} disabled={!isRunning}>
          Stop
        </button>
      </p>
    </article>
  );
}
