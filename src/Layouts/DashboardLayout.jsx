import React from "react";
import { Outlet } from "react-router";
import DashNav from "../Components/DashBoardComponents/DashNav";
import SideNav from "../Components/DashBoardComponents/SideNav";
import DashFooter from "../Components/DashBoardComponents/DashFooter";
const DashboardLayout = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Navbar */}
          <DashNav></DashNav>
          {/* Page content here */}
          <div className="p-4">
            <Outlet></Outlet>
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
            {/* Sidebar content here */}
            <SideNav></SideNav>
          </div>
        </div>
      </div>
      <footer>
        <DashFooter></DashFooter>
      </footer>
    </>
  );
};

export default DashboardLayout;
