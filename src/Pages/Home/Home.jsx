import React from "react";
import { useContext } from "react";
import AuthContext from "../../Contexts/Context/AuthContext";
import Hero from "../../Components/Hero";
import HowWorks from "../../Components/HowWorks";
import HomeCard from "../../Components/HomeCard";
import Feedback from "../../Components/Feedback";
import WhyChooseUs from "../../Components/WhyChooseUs";
import CTA from "../../Components/CTA";

const Home = () => {
  const { message } = useContext(AuthContext);
  console.log(message);

  return (
    <div className="">
      <section>
        <Hero></Hero>
      </section>

      <HomeCard></HomeCard>

      <WhyChooseUs></WhyChooseUs>

      <Feedback></Feedback>

      <section>
        <HowWorks></HowWorks>
      </section>

      <CTA></CTA>
    </div>
  );
};

export default Home;
