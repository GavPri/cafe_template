import React, { useState, useEffect } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setReveal(true);
  }, []);

  return (
    <div className="bg-bg min-h-[calc(100vh-144px)] text-textP w-screen">
      {/* Content Div */}
      <div className="bg-bg w-full mx-auto pl-6 pt-6">
        {/* h1 - Paramount Cafe */}
        <h1
          className={`text-3xl font-bold tracking-widest pb-4 transition-all duration-700 ease-in-out ${
            reveal ? "h-auto opacity-100 delay-[200ms]" : "h-0 opacity-0"
          }`}
        >
          Paramount Cafe
        </h1>

        {/* h2 - Speciality Coffee */}
        <h2
          className={`text-2xl font-medium text-textS tracking-wider pb-4 transition-all duration-700 ease-in-out ${
            reveal ? "h-auto opacity-100 delay-[400ms]" : "h-0 opacity-0"
          }`}
        >
          Speciality Coffee
        </h2>

        {/* h3 - Location */}
        <h3
          className={`flex items-center text-textS text-xl transition-all duration-700 ease-in-out ${
            reveal ? "h-auto opacity-100 delay-[600ms]" : "h-0 opacity-0"
          }`}
        >
          <MdOutlineLocationOn className="mr-2" /> Dublin, Ireland
        </h3>
      </div>

      {/* Button Div with delays */}
      <div className="flex items-center pl-6 pt-6 mb-2">
        <NavLink
          to="/find-us"
          className={`text-lg py-2 px-4 bg-bg border-border border-2 rounded-md text-textP mr-4 tracking-wide transition-all duration-700 ease-in-out ${
            reveal ? "opacity-100 delay-[800ms]" : "opacity-0"
          }`}
        >
          Get Directions
        </NavLink>
        <NavLink
          className={`text-lg py-2 px-4 bg-[#1DB954] border-border rounded-md tracking-wide text-textP transition-all duration-700 ease-in-out ${
            reveal ? "opacity-100 delay-[1000ms]" : "opacity-0"
          }`}
        >
          Menu
        </NavLink>
      </div>

      {/* Image Div with delay */}
      <div
        className={`w-full mt-auto transition-all duration-700 ease-in-out ${
          reveal ? "opacity-100 delay-[1200ms]" : "opacity-0"
        }`}
      >
        <img
          className="w-full min-h-[60vh] object-cover"
          src="./images/hero.jpg"
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Home;
