import React, { useState, useLayoutEffect, useRef } from "react";

const Dyamiclayout = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  useLayoutEffect(() => {
    const updateWidth = () => {
      const currentWidth = divRef.current?.offsetWidth || 0;
      setWidth(currentWidth);
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className="flex items-center justify-center bg-blue-200 text-blue-900 font-bold h-24 rounded-lg shadow-lg"
    >
      <p>The width of this div is: {width}px</p>
    </div>
  );
};

export default Dyamiclayout;
