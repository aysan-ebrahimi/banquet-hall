import React, { useState } from "react";
import banner from "../constants/photos/bannerImage.jpg";
import BookNowForm from "./BookNowForm";
import Navbar from "./Navbar";
const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div
      className="relative w-full h-[655px] lg:h-[655px] md:h-[655px]  bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <Navbar />
      <div className="absolute bottom-60 left-20 flex flex-col gap-12 items-start justify-center text-white font-sans">
        <h1 className="flex flex-col font-medium text-[4.3rem]/[4.3rem]">
          GRAND <span className="forn-bold">PEARL.</span>
        </h1>
        <button
          onClick={toggleForm}
          className="w-[13rem] h-[3rem] backdrop-blur-[0.5rem]"
        >
          BOOK NOW
        </button>
        <BookNowForm toggleForm={toggleForm} showForm={showForm} />
      </div>
    </div>
  );
};

export default Header;
