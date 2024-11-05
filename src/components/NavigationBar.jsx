import React, { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuChange = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <div className="w-full h-24 bg-bg flex justify-between items-center px-6">
        <h1 className="text-textP text-2xl tracking-wider z-10">Paramount Cafe</h1>
        <HamburgerMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          handleMenuChange={handleMenuChange}
        />
      </div>
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        handleMenuChange={handleMenuChange}
      />
    </>
  );
};

export default NavigationBar;
