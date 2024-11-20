import React, { useState, useMemo } from 'react'

const Usememo = () => {
    const [count, setCount] = useState(0)
    const [othervalue,setothervalue]=useState(0);
    const expensiveCalculatuion =(num)=>{
        console.log("calculating....");
        for(let i=0;i < 1000000000;i++ ){}
        return num*2;
        
    }
  const memoizedValue = useMemo(()=>expensiveCalculatuion(count),[count]);
  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-gray-700">
        Count: <span className="text-indigo-600">{count}</span>
      </h2>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-indigo-500 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-600 focus:outline-none"
      >
        Increment Count
      </button>

      <h2 className="text-2xl font-semibold text-gray-700">
        Other Value: <span className="text-green-600">{othervalue}</span>
      </h2>
      <button
        onClick={() => setothervalue(othervalue + 1)}
        className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 focus:outline-none"
      >
        Increment Other Value
      </button>

      <h2 className="text-2xl font-semibold text-gray-700">
        Expensive Computed Value: <span className="text-red-600">{memoizedValue}</span>
      </h2>
    </div>
  )
}

export default Usememo
