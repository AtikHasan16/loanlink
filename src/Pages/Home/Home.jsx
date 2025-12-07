import React from "react";
import { useContext } from "react";
import AuthContext from "../../Contexts/Context/AuthContext";
import Hero from "../../Components/Hero";
import HowWorks from "../../Components/HowWorks";

const Home = () => {
  const { message } = useContext(AuthContext);
  console.log(message);

  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
      <section>
        <HowWorks></HowWorks>
      </section>
    </div>
  );
};

export default Home;
