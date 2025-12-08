import React from "react";
import { BiHome, BiMoney, BiUser } from "react-icons/bi";
import { NavLink } from "react-router";
import { IoNewspaperOutline } from "react-icons/io5";
const SideNav = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/dashboard/manage-user"
          className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
          data-tip="Manage Users"
        >
          {/* Home icon */}
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
          {/* Home icon */}
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
          {/* Home icon */}
          <IoNewspaperOutline size={30}></IoNewspaperOutline>
          <span className="is-drawer-close:hidden">Loan Application</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <ul className="menu gap-4 w-full grow text-xl font-semibold">
        {/* List item */}
        {links}
      </ul>
    </div>
  );
};

export default SideNav;
