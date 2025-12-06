import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      <header></header>
      <aside></aside>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default DashboardLayout;
