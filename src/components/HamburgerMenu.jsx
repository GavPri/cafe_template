import React from 'react'

const HamburgerMenu = ({menuOpen, handleMenuChange}) => {
  return (
    <div className="flex flex-col relative h-4 mr-6 text-textS" onClick={handleMenuChange}>
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
  );
}

export default HamburgerMenu