import React from "react";
import { useContext } from "react";
import AuthContext from "../../Contexts/Context/AuthContext";
import Hero from "../../Components/Hero";
import HowWorks from "../../Components/HowWorks";
import HomeCard from "../../Components/HomeCard";

const Home = () => {
  const { message } = useContext(AuthContext);
  console.log(message);

  return (
    <div className="">
      <section>
        <Hero></Hero>
      </section>

      <HomeCard></HomeCard>

      <section>
        <HowWorks></HowWorks>
      </section>
    </div>
  );
};

export default Home;
