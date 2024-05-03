import React, { useState, useEffect } from "react";

function Ticker() {
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);
   const [timerActive, setTimerActive] = useState(false);  
   const [timerId, setTimerId] = useState(null);  


   const startTimer = () => {
      if (!timerActive) {
         const id = setInterval(() => {
            setSeconds(prev => {
               if (prev > 0) return prev - 1;  
               if (minutes > 0) {
                  setMinutes(minutes - 1);  // Decrement minutes and reset seconds
                  return 59;
               }
               clearInterval(id);  // Clear interval when time runs out
               setTimerActive(false);
               return 0;
            });
         }, 1000);

         setTimerId(id); 
         setTimerActive(true);
      }
   };

   
   const pauseTimer = () => {
      if (timerId) {
         clearInterval(timerId);  // Clear current interval
         setTimerActive(false);
      }
   };

   const resetTimer = () => {
      pauseTimer();
      setMinutes(0);
      setSeconds(0);
   };

   return (
      <div>
         <h3>Timer</h3>

         <input
            type="number"
            value={minutes}
            onChange={e => setMinutes(parseInt(e.target.value)||0)}
            placeholder="Minutes"
         />
         <input
            type="number"
            value={seconds}
            onChange={e => setSeconds(parseInt(e.target.value)||0)}
            placeholder="Seconds"
         />

         <div>
            <button onClick={() => setMinutes(5)}>5 Minutes</button>
            <button onClick={() => setMinutes(10)}>10 Minutes</button>
            <button onClick={() => setMinutes(15)}>15 Minutes</button>
         </div>

         <div>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
         </div>

         <div>
         Time Remaining: {minutes}:{seconds}<br/>
         Time Remaining: {minutes}:{String(seconds).padStart(2, '0')}

         </div>
      </div>
   );
}

export default Ticker;
