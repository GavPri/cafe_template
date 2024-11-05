import React from "react";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-auto w-full h-12 bg-bg border-t-2 border-bordera">
      <p className="text-textS flex items-center justify-end mr-2 mt-3 text-xs font-thin">
        <MdCopyright size={20} /> Paramount Cafe. All rights reserved 2024
      </p>
    </div>
  );
};

export default Footer;
