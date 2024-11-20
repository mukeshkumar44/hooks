import React, { useLayoutEffect, useState, useRef } from 'react'

const Uselayout = () => {
    const [bgColur, setbgColour] = useState("lightblue");
    const divRef=useRef(null);
    useLayoutEffect(()=>{
        const width = divRef.current.offsetWidth;
        if(width>500){
            setbgColour("lightgreen")
                
       
        }else{
            setbgColour("red")
        }
    })
  return (
    <div 
    ref={divRef}
     style={{
        backgroundColor:bgColur,
        width:'80%',
        margin:"20px auto",
        padding:"20px",
        textAlign:"center"

    }}>
      
      
    </div>
  )
}

export default Uselayout
