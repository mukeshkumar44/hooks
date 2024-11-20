import React, { useReducer } from 'react'

const Reducer = () => {
    let reducer=(state,action)=>{
        if(action.type==='increment')
            return state+1 
        else if (action.type==='decrement')
          
            return state-1 
        
    }     
    let [state,dispatch]=useReducer(reducer,0);
  return (
    <div className='text-center pt-52'>
        <p>count: {state}</p>
        <button className='bg-red-500 h-12 w-72 ' onClick={()=>dispatch({type: 'increment'})}>increment</button>
        <button  className='bg-red-500 h-12 w-72 ml-5' onClick={()=>dispatch({type: 'decrement'})}>decrement</button>
      
    </div>
  )
}

export default Reducer
