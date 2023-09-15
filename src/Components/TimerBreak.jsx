
import React, { useState, useEffect } from 'react';

function TimerBreak({ setIsBreak }) {
  const [time, setTime] = useState(5* 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true)
    let interval;
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsBreak(false); 
    }

    return () => clearInterval(interval);
  }, [isActive, time, setIsBreak]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(5 * 60);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div className='timer_Container'>
    <h1>Break Time</h1>
    <div className='timer'>{formatTime(time)}</div>

    <div className='timer_btns breaktimer'>
    <button onClick={handleStartPause}>
      {isActive ? 'Pause' : 'Start'}
    </button>
    <button onClick={handleReset}>Reset</button>

    </div>
  </div>
  );
}

export default TimerBreak;

