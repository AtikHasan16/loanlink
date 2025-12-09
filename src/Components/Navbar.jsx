import React from "react";
import { Link, NavLink } from "react-router";
import {} from "react-icons/fa";

// Dashboard & Navigation Icons
import { MdCall, MdDashboard } from "react-icons/md";
import {} from "react-icons/hi";

// Loan & Money Icons
import {} from "react-icons/gi";
import {
  BiHome,
  BiLogIn,
  BiMenu,
  BiMoney,
  BiRegistered,
  BiUser,
  BiUserPlus,
} from "react-icons/bi";

// Actions (Edit, Delete, View)
import {} from "react-icons/fa";

// UI Elements (Spinner, Close, Check)
import {} from "react-icons/im"; // Good for loading states
import { IoCall } from "react-icons/io5";
import { BsQuestionCircle } from "react-icons/bs"; // Theme toggle

// Socials (Footer)
import {} from "react-icons/fa";
import useAuth from "../Hooks/useAuth";

import Loading from "../Pages/Loading/Loading";
import Logo from "./Shared/Logo";
import ProfileAvatar from "./Shared/ProfileAvatar";
import ThemeToggle from "./Shared/ThemeToggle";

const Navbar = () => {
  const { currentUser, loading } = useAuth();

  const links = loading ? (
    // Skeleton Loading State
    <>
      <li>
        <div className="skeleton  h-10 w-24"></div>
      </li>
      <li>
        <div className="skeleton h-10 w-24"></div>
      </li>
      <li>
        <div className="skeleton h-10 w-28"></div>
      </li>
      <li>
        <div className="skeleton h-10 w-32"></div>
      </li>
      <li>
        <div className="skeleton h-10 w-32"></div>
      </li>
      {/* Auth Skeleton */}
      <li>
        <div className="skeleton h-12 w-28 rounded-full"></div>
      </li>
      <li>
        <div className="skeleton h-12 w-24 rounded-full"></div>
      </li>
    </>
  ) : (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? " text-primary" : "")}
        >
          <BiHome></BiHome>Home
        </NavLink>
      </li>
      {currentUser && (
        <li>
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) => (isActive ? " text-primary" : "")}
          >
            <MdDashboard></MdDashboard>
            Dashboard
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={"/all-loans"}
          className={({ isActive }) => (isActive ? " text-primary" : "")}
        >
          <BiMoney></BiMoney>
          All-Loans
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) => (isActive ? " text-primary" : "")}
        >
          <BsQuestionCircle></BsQuestionCircle>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) => (isActive ? " text-primary" : "")}
        >
          <MdCall></MdCall>
          Contact Us
        </NavLink>
      </li>
      <>
        {currentUser ? (
          <ProfileAvatar></ProfileAvatar>
        ) : (
          <>
            <li>
              <Link
                to={"/register"}
                className="btn bg-primary text-secondary rounded-full btn-lg"
              >
                Register
                <BiUserPlus></BiUserPlus>
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className="btn rounded-full bg-primary text-secondary  btn-lg"
              >
                Login
                <BiLogIn></BiLogIn>
              </Link>
            </li>
          </>
        )}
      </>
    </>
  );

  return (
    <div className="">
      <div className="navbar py-3 bg-accent shadow-sm  jost fixed z-50 top-0 lg:px-10 mx-auto">
        {/* Logo */}
        <Logo></Logo>

        <div className="xl:hidden  w-full flex justify-end items-center gap-2">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn border-none bg-transparent shadow-none xl:hidden"
            >
              <BiMenu size={33}></BiMenu>
            </div>
            <ul
              tabIndex="-1"
              className="menu dropdown-content bg-accent rounded-box z-1 mt-3 w-52 p-2 shadow text-lg  font-semibold"
            >
              {links}
            </ul>
          </div>
          {/* Theme toggle */}
          <ThemeToggle></ThemeToggle>
        </div>
        <div className="navbar-end hidden w-full xl:flex">
          <ul className="text-lg text menu menu-horizontal font-semibold  items-center gap-2">
            {links}
            {/* Theme toggle */}
            <ThemeToggle></ThemeToggle>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
