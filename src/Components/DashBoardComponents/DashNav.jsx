import React from "react";
import { BiSidebar } from "react-icons/bi";

const DashNav = () => {
  return (
    <div>
      <nav className="navbar w-full bg-base-300">
        <label
          htmlFor="my-drawer-4"
          aria-label="open sidebar"
          className="btn btn-square btn-ghost"
        >
          {/* Sidebar toggle icon */}
        <BiSidebar size={30}></BiSidebar>
        </label>
        <div className="px-4">Navbar Title</div>
      </nav>
    </div>
  );
};

export default DashNav;
