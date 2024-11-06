import React from "react";

const FindUs = () => {
  return (
    <div className="bg-bg min-h-[calc(100vh-144px)] text-textP w-screen pl-6 pt-12 overflow-x-hidden">
      <div className="flex justify-between items-center pb-6">
        <h1 className="text-textP font-bold text-4xl tracking-widest ">
          Find Us
        </h1>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=O%27Connell+Street+Lower,+Dublin,+Ireland"
          target="_blank"
          rel="noopener noreferrer"
          className=" mr-6 py-2 px-6 bg-[#1DB954] text-white rounded-md text-center tracking-wider"
        >
          Get Directions
        </a>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.6540697742817!2d-6.262924522992968!3d53.34944837449111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e8441acbc79%3A0x377a23c877cf03a6!2sAn%20Post%2C%20General%20Post%20Office!5e0!3m2!1sen!2sie!4v1730835842925!5m2!1sen!2sie"
          width="350"
          height="225"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="mb-6"
        ></iframe>
      </div>
      <div className="w-fit ml-auto mr-6 flex flex-col items-end">
        <h2 className="text-textS font-sm mb-2 text-right w-full">
          Opening Hours
        </h2>
        <div className="flex justify-evenly items-center text-xs font-normal mb-4">
          <div className="text-left">
            <p className="tracking-wide">Mon - Fri</p>
            <p className="tracking-wide">Saturday</p>
            <p className="tracking-wide">Sunday</p>
          </div>
          <div className="mx-4 text-xs">
            <p className="tracking-wide">7AM -3PM</p>
            <p className="tracking-wide">9AM - 2PM</p>
            <p className="tracking-wide">CLOSED</p>
          </div>
        </div>
        <h2 className="text-textS font-sm text-right w-full mr-auto mb-2">
          Location
        </h2>
        <h3 className="text-xs text-textP text-left tracking-wide">
          O'Connell Street Lower, Dublin 1, <br />
          D01 F5P2
        </h3>
      </div>
    </div>
  );
};

export default FindUs;
