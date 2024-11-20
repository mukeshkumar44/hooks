import { useRef } from "react"


const Useref = () => {
    const inputRef=useRef(null);
    const handle=()=>{
        inputRef.current.focus();
    }
  return (
    <div>
    <input ref={inputRef} type="text" className="ml-40 outline-none border border-red-600 mt-40 shadow-inner shadow-red-800 shado"/>

      <button onClick={handle} className="ml-9 border border-red-600 font-bold text-green-800 mt-40 shadow-inner shadow-red-800 shado">Focus input</button>
    </div>
  )
}

export default Useref
