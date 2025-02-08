import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bottom-0 w-full h-[8.125rem] px-20 flex items-center justify-between bg-gray text-white">
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-2">
          <FaLocationDot />
          <span>Lucknow, Uttar pradesh</span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <span>+91 1234567890</span>
        </div>
      </div>
      <div className="flex flex-col items-end gap-2">
        <Link>About us</Link>
        <Link>Gallery</Link>
      </div>
    </footer>
  );
};

export default Footer;
