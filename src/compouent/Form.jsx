import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  password: ''
};

const formReducer = (state, action) => {
  if (action.type === 'UPDATE_NAME') {
    return { ...state, name: action.payload };
  } else if (action.type === 'UPDATE_EMAIL') {
    return { ...state, email: action.payload };
  } else if (action.type === 'UPDATE_PASSWORD') {
    return { ...state, password: action.payload };
  } else {
    return state; 
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handle = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: `UPDATE_${name.toUpperCase()}`, 
      payload: value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted with:', state);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={state.name}
              onChange={handle}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={state.email}
              onChange={handle}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={state.password}
              onChange={handle}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
