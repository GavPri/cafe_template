import React, { useState } from "react";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuChange = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="w-full h-24 bg-bg flex justify-between items-center px-4">
      <h1 className="text-textP text-2xl tracking-wider">Paramount Cafe</h1>
      <div className="flex flex-col" onClick={handleMenuChange}>
        <span className="w-6 h-0.5 bg-textS rounded-md inline-block mb-2"></span>
        <span className="w-6 h-0.5 bg-textS rounded-md inline-block"></span>
      </div>
    </div>
  );
};

export default NavigationBar;
