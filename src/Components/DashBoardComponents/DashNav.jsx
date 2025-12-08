import React from "react";
import { BiSidebar } from "react-icons/bi";
import Logo from "../Shared/Logo";
import ThemeToggle from "../Shared/ThemeToggle";
import ProfileAvatar from "../Shared/ProfileAvatar";

const DashNav = () => {
  return (
    <div>
      <nav className="navbar w-full sm:pr-10 lg:pr-20 bg-accent shadow-sm fixed z-50 top-0  mx-auto">
        <label
          htmlFor="my-drawer-4"
          aria-label="open sidebar"
          className="btn btn-ghost "
        >
          {/* Sidebar toggle icon */}
          <BiSidebar size={30} className="text-gray-400"></BiSidebar>
        </label>
        <div className="">
          <Logo></Logo>
        </div>
        <div className="navbar-end w-full">
          {/* Theme toggle */}
          <ThemeToggle></ThemeToggle>
          <div className="mr-5 my-2">
            <ProfileAvatar></ProfileAvatar>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DashNav;
