import React from "react";
import Footer from "../components/Footer";
import HallsSlider from "../components/HallsSlider";
import Header from "../components/Header";
import RoomsSlider from "../components/RoomsSlider";

const Home = () => {
  return (
    <div>
      <Header />
      <RoomsSlider />
      <HallsSlider />
      <Footer />
    </div>
  );
};

export default Home;
