import React from "react";

const MobileMenu = ({ menuOpen }) => {
  return (
    <div
      className={`h-[calc(100vh-96px)] w-screen bg-bg border-border transition-all ease-in duration-300 ${
        menuOpen
          ? "translate-y-0 opacity-100 h-96"
          : "-translate-y-[200%] opacity-0 h-0 rounded-md"
      }`}
    >
      <nav className="text-textS tracking-wide w-full h-full text-center flex flex-col justify-center items-center">
        <ul>
          <li className={`leading-10 text-3xl mb-10  ${menuOpen ? 'opacity-100 transition-opacity ease-in duration-500' : 'opacity-0'}`}>Home</li>
          <li className={`leading-10 text-3xl mb-10  ${menuOpen ? 'opacity-100 transition-opacity ease-in duration-500' : 'opacity-0'}`}>About</li>
          <li className={`leading-10 text-3xl mb-10  ${menuOpen ? 'opacity-100 transition-opacity ease-in duration-500' : 'opacity-0'}`}>Find Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
