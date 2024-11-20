import React, { useLayoutEffect, useRef, useState } from "react";

const StickyHeader = () => {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useLayoutEffect(() => {
    const header = headerRef.current;
    const stickyOffset = header.offsetTop;

    const handleScroll = () => {
      if (window.scrollY > stickyOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`${
        isSticky ? "fixed top-0 left-0 w-full shadow-lg z-50" : "relative"
      } bg-blue-600 text-white py-4 px-6 transition-all duration-300`}
    >
      <h1 className="text-2xl font-semibold">Sticky Header</h1>
    </header>
  );
};

export default StickyHeader;
