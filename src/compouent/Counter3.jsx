import React from 'react'
import { useReducer } from 'react'

const Counter3 = () => {
    
    let reducer=(state,action)=>{
        if(action.type=="ram")
            return {...state,input:action.payload}  //state obj k andar only input ko update kr rhe h
       else if(action.type=="increment")
        {
            
            return {...state,vivo:state.vivo+Number(state.input)}  //state obj k andar only vivo ko update kr rhe h
        }
        else if(action.type=="decrement")
            {
                
                return {...state,vivo:state.vivo-Number(state.input)}  //state obj k andar only vivo ko update kr rhe h
            }
    }
    let [count,dispatch]=useReducer(reducer,{vivo:0,input:0})
  return (
    <div className='flex flex-col min-h-[100vh] justify-center items-center bg-[yellow] '>
    <input type="text" className='rounded-md py-[.4rem] outline-none' onChange={(e)=>dispatch({type:"ram",payload:e.target.value})}/>

    <p className='mt-[.5rem]'>sum= {count.vivo}</p>

    <button  className='bg-[#4e9b57] rounded-xl px-[2rem] py-[.4rem] text-white font-bold mt-[1rem]' onClick={()=>dispatch({type:"increment"})}>Increment</button>

        <button  className='bg-[#356339] rounded-xl px-[2rem] py-[.4rem] text-white font-bold mt-[1rem]'onClick={()=>dispatch({type:"decrement"})}>Decrement</button>


    </div>
  )
}

export default Counter3