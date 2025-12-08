import React from "react";
import { BiHome } from "react-icons/bi";
import { NavLink } from "react-router";

const SideNav = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? " text-primary"
              : "is-drawer-close:tooltip is-drawer-close:tooltip-right"
          }
          data-tip="Homepage"
        >
          {/* Home icon */}
          <BiHome size={30}></BiHome>
          <span className="is-drawer-close:hidden">Home</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <ul className="menu w-full grow text-xl font-semibold">
        {/* List item */}
        {links}
      </ul>
    </div>
  );
};

export default SideNav;
