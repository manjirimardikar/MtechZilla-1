
import React, { useState, useEffect } from 'react';
import './Counter.css'

function Timer({ setIsBreak }) {
  const [time, setTime] = useState(25*60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsBreak(true); 
    }

    return () => clearInterval(interval);
  }, [isActive, time, setIsBreak]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(25 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className='timerdiv'>
      <h1>Timer App</h1>
      <div className='timer'>{formatTime(time)}</div>

      <div className='timerbutton'>
      <button onClick={handleStartPause}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>

      </div>
    </div>
  );
}

export default Timer;

