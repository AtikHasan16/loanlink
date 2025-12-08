import React from "react";
import { BiDollar, BiHome, BiMoney, BiPowerOff, BiUser } from "react-icons/bi";
import { NavLink } from "react-router";
import { IoNewspaperOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import ThemeToggle from "../Shared/ThemeToggle";
const SideNav = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/dashboard/manage-user"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Manage Users"
        >
          {/* User icon */}
          <BiUser size={30}></BiUser>
          <span className="is-drawer-close:hidden">Manage Users</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/all-loans"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="All Loans"
        >
          {/* Money icon */}
          <BiMoney size={30}></BiMoney>
          <span className="is-drawer-close:hidden">All Loans</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/loan-application"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Loan Application"
        >
          {/* Newspaper icon */}
          <IoNewspaperOutline size={30}></IoNewspaperOutline>
          <span className="is-drawer-close:hidden">Loan Application</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/my-loan"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="My Loan"
        >
          {/* Newspaper icon */}
          <BiDollar size={30}></BiDollar>
          <span className="is-drawer-close:hidden">My Loan</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="My Profile"
        >
          {/* Profile icon */}
          <ImProfile size={28}></ImProfile>
          <span className="is-drawer-close:hidden">My Profile</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex flex-col items-baseline h-screen pt-70 pb-5 w-full">
      <ul className="menu gap-4 w-full grow text-xl font-semibold">
        {/* List item */}
        {links}
      </ul>
      <div className="flex flex-col gap-4 items-center justify-center w-full text-center">
        <button
          data-tip="Logout"
          className="btn btn-ghost tooltip tooltip-right"
        >
          <BiPowerOff size={30}></BiPowerOff>
        </button>
        <div >

        <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
