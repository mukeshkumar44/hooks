import React, { useState, useEffect } from 'react';


const Useeffect = () => {
 
  const [count, setCount] = useState(0);

  
  useEffect(() => {
    document.title = `Jai shree ram: ${count}`;
  }, [count]);

  
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      
        <title>Jai shree ram:{count}</title>
     
      <button
        className='bg-green-500 text-fuchsia-50 text-center ml-[40%] h-40 w-60 mt-16 text-4xl rounded-2xl'
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
};

export default Useeffect;
