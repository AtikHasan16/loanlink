import React from "react";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div>
      <header></header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default HomeLayout;
