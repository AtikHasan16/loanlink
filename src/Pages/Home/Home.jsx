import React from "react";
import { useContext } from "react";
import AuthContext from "../../Contexts/Context/AuthContext";

const Home = () => {
  const { message } = useContext(AuthContext);
  console.log(message);

  return <div>Home</div>;
};

export default Home;
