import React, { useState } from 'react'

const In_de = () => {
    let [count,setCount] = useState(0)
    const [input,Valuee]=useState('');
    // const add = ()=>{
    //    setCount(++count);
        
    // }
    // const sub = ()=>{
    //   if(count > 0){
    //   setCount(--count);
    //   }else{
    //     setCount(0)
        
    //   }
    // }
    

    const add=()=>
    {
      const valueToAdd = Number(input); 
      setCount(count+ valueToAdd)
      
    }
  
    const sub=()=>
      {
        const valueTosub = Number(input); 
        setCount(count-valueTosub)
        
      }
      const but=()=>{
        setCount(0);
        Valuee(0);
      }
  
  return (
    <div className='flex justify-center items-center h-[100vh] bg-gradient-to-r from-violet-500 to-orange-300'>
        <div>
        <input value={input} className='block border-2  h-10 w-[600px] rounded-xl text-center bg-slate-300'   onChange={(e) => Valuee(e.target.value)}
 type="number" placeholder='Enter number'></input>
        
    <div className='pt-5 ml-8'>
    
     <button className=' rounded-xl h-12 w-[250px] bg-lime-500' onClick={add}>Increment</button>
     <button className=' rounded-xl h-12 w-[250px] bg-lime-500 ml-10'onClick={sub} >Decrement</button>
     <button className=' rounded-xl h-12 w-[250px] bg-lime-500 mt-10 ml-[150px] block' onClick={but}>Reset</button>
     <p className='text-[white] flex justify-center mt-[40px] text-[30px]'>Current value : {count}</p>

    </div>
    </div>
    </div>
  )
}

export default In_de
