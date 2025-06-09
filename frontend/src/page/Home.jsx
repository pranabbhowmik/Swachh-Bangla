import React from "react";
import UserCard from "../components/Home/UserCard";
import PosterSlider from "../components/Home/PosterSlider";
import MeteralSlider from "../components/Home/MeteralSlider";
import Services from "../components/Home/Server";

function Home() {
  return (
    <>
      <UserCard />
      <PosterSlider />
      <MeteralSlider />
      <Services />
    </>
  );
}

export default Home;
