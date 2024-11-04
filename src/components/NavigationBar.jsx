import React, { useState } from "react";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuChange = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-full h-24 bg-bg flex justify-between items-center px-6">
      <h1 className="text-textP text-2xl tracking-wider">Paramount Cafe</h1>
      <div
        className="flex flex-col relative h-4 mr-6"
        onClick={handleMenuChange}
      >
        <span
          className={`w-6 h-0.5 bg-textS rounded-md inline-block mb-0 transition-transform duration-200 absolute top-0 ${
            menuOpen ? "w-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-textS rounded-md inline-block mb-0 transition-transform duration-200 absolute top-1/2 ${
            menuOpen ? "-rotate-45 " : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-textS rounded-md inline-block mb-0 transition-transform duration-200 absolute top-1/2 ${
            menuOpen ? "rotate-45 " : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-textS rounded-md inline-block transition-transform duration-200 absolute top-[100%] ${
            menuOpen ? " w-0" : ""
          }`}
        ></span>
      </div>
    </div>
  );
};

export default NavigationBar;
