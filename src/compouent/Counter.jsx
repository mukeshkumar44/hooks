import React, { useReducer, useState } from 'react';


const initialState =
 {
  counter: 0,
  count: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + state.count };
    case 'change-step':
      return { ...state, count: action.payload };
    case 'reset':
      return { ...state, counter: 0 };
    default:
      return state;
  }
}

const Counter = () => {
  const [Input, setInput] = useState('');
  
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInc = () => {
    dispatch({ type: 'increment' });
  };

  const handleChange = () => {
    const count = parseInt(Input);
    if (isNaN(count) || count <= 0) {
     
      return;
    }
    dispatch({ type: 'change-step', payload: count });
    setInput(''); 
  };

  
  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">Counter</h1>
      <div className="mt-5">
        <h2 className="text-2xl">Counter: {state.counter}</h2>
        <h3 className="mt-2">Current Step: {state.count}</h3>
      </div>
      
      
      <button
        onClick={handleInc}
        className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Increment by {state.count}
      </button>
      
     
      <div className="mt-5">
        <input
          type="number"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter step value"
          className="py-2 px-4 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleChange}
          className="ml-2 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Change Step
        </button>
      </div>
      
      
      <div className="mt-4">
        <button
          onClick={handleReset}
          className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
        >
          Reset Counter
        </button>
      </div>
    </div>
  );
};

export default Counter;
