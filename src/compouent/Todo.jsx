import React, { useReducer, useState } from 'react'

const Todo = () => {
    const initialState =[]
    function reducer(state,action){
        switch (action.type) {
            case'add-todo':
            return[...state,{id:Date.now(),text:action.payload,completed:false}]
            case'remove-todo':
            return state.filter(todo=>todo.id !== action.payload);
            case'toggle-todo':
            return state.map(todo=>todo.id === action.payload ? {...todo,completed: ! todo.completed} :todo )
    }
    }
    const [text, setText]= useState ('')
    const[state, dispatch]=useReducer(reducer, initialState)
    const handle =()=>{
        if(text.trim()){
            dispatch({type:"add-todo",payload:text})
            setText('')
        }
    }
  return (
    
    <div className="text-center mt-48">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter the text"
        className="border-2 border-black p-2 rounded-md"
      />
      <button
        className="bg-red-500 text-white p-2 rounded-md ml-5"
        onClick={handle}
      >
        Add Todo
      </button>

      <ul className="mt-4">
        {state.map((todo) => (
          <li key={todo.id} className="flex justify-between items-center mt-2 p-2 bg-gray-100 rounded-md">
            <span
              onClick={() => dispatch({ type: 'toggle-todo', payload: todo.id })}
              className={`cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
            >
              {todo.text}
            </span>
            <div>
              <button
                onClick={() => dispatch({ type: 'remove-todo', payload: todo.id })}
                className="bg-red-400 text-white p-1 rounded-md ml-3"
              >
                Remove
              </button>
              <span className={`ml-2 ${todo.completed ? 'text-green-500' : 'text-yellow-500'}`}>
                {todo.completed ? 'Completed' : 'Not Completed'}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo
