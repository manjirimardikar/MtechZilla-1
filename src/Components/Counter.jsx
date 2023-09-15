import React, { useState } from 'react'
import TimerBreak from './TimerBreak';
import Timer from './Timer';
import './Counter.css'

export const Counter = () => {
    const [isBreak, setIsBreak] = useState(false);
    const logout =()=>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div className='counter'>
        <div className="Logout">
        <button onClick={logout}>Logout</button>
        </div>
       
         {isBreak ? (
            <TimerBreak setIsBreak={setIsBreak} />
          ) : (
            <Timer setIsBreak={setIsBreak} />
          )}
    </div>
  )
}