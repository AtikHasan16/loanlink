import React from "react";
import { useContext } from "react";
import AuthContext from "../../Contexts/Context/AuthContext";
import Hero from "../../Components/Hero";

const Home = () => {
  const { message } = useContext(AuthContext);
  console.log(message);

  return (
    <div>
      <section>
        <Hero></Hero>
      </section>
    </div>
  );
};

export default Home;
