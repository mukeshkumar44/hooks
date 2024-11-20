import React, { useRef, useState } from 'react'

const StopwatchUseref = () => {
    const[time,settime]=useState(0);
    const timeRef=useRef(null)
    const startTimer=()=>{
        if(!timeRef.current){
            timeRef.current=setInterval(()=>{settime(prevTime=>prevTime+1);},1000)
        }
    }
    const stopTimer=()=>{
        if(timeRef.current){
        clearInterval(timeRef.current);
        timeRef.current=null
        }
    }
    const resetTimer=()=>{
        stopTimer();
        settime(0);
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h2 className="text-3xl font-semibold mb-6 p-4 rounded-lg bg-white shadow-lg">
      Stopwatch: <span className="text-indigo-600">{time} seconds</span>
    </h2>
    
    <div className="space-y-4">
      <button
        className="w-40 px-4 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition duration-300"
        onClick={startTimer}
      >
        Start
      </button>
      
      <button
        className="w-40 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
        onClick={stopTimer}
      >
        Stop
      </button>
      
      <button
        className="w-40 px-4 py-2 bg-gray-500 text-white rounded-lg shadow-md hover:bg-gray-600 transition duration-300"
        onClick={resetTimer}
      >
        Reset
      </button>
    </div>
  </div>
  )
}

export default StopwatchUseref
