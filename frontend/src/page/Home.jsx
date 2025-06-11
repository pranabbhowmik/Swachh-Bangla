import React from "react";
import UserCard from "../components/Home/UserCard";
import PosterSlider from "../components/Home/PosterSlider";
import MeteralSlider from "../components/Home/MeteralSlider";
import Services from "../components/Home/Service";
import RecyclingCard from "../components/Home/RecyclingCard";

function Home() {
  return (
    <>
      <UserCard />
      <PosterSlider />
      <MeteralSlider />
      <Services />
      <RecyclingCard />
    </>
  );
}

export default Home;
