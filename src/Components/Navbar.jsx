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
import { BsMoon, BsQuestion, BsQuestionCircle, BsSun } from "react-icons/bs"; // Theme toggle

// Socials (Footer)
import {} from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? " text-primary" : "")}
        >
          <BiHome></BiHome>Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? " text-primary" : "")}
        >
          <MdDashboard></MdDashboard>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/all-loans"}
          className={({ isActive }) => (isActive ? " text-primary" : "")}
        >
          All-Loans
          <BiMoney></BiMoney>
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
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-accent shadow-sm  jost fixed z-50 top-0 lg:px-10 mx-auto">
        <div className="navbar-start   w-fit">
          <Link
            to={"/"}
            className="btn border-none bg-transparent shadow-none text-3xl font-bold text-primary"
          >
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-secondary font-bold">LL</span>
            </div>
            LoanLink
          </Link>
        </div>

        <div className="xl:hidden  w-full flex justify-end">
          <div className="dropdown dropdown-bottom dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn border-none bg-transparent xl:hidden"
            >
              <BiMenu size={33}></BiMenu>
            </div>
            <ul
              tabIndex="-1"
              className="menu  dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-lg  font-semibold"
            >
              {links}
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <label className="toggle toggle-xl text-primary">
              <input
                type="checkbox"
                value={"dark"}
                className="theme-controller"
              />
              <BsSun size={24}></BsSun>
              <BsMoon size={24}></BsMoon>
            </label>
          </div>
        </div>
        <div className="navbar-end hidden w-full xl:flex">
          <ul className="text-lg text menu menu-horizontal font-semibold  items-center gap-2">
            {links}
            <div className="flex justify-center items-center">
              <label className="toggle toggle-xl text-primary">
                <input
                  type="checkbox"
                  value={"dark"}
                  className="theme-controller"
                />
                <BsSun size={24}></BsSun>
                <BsMoon size={24}></BsMoon>
              </label>
            </div>
          </ul>
        </div>

        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-transparent border-none avatar"
          >
            <div className="ring-primary ring-offset-base-100 rounded-full w-13 ring-2 ring-offset-2">
              <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
            </div>
          </div>
          <ul
            tabIndex="-1"
            className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-2"
          >
            <li className="btn">User Information</li>
            <li>
              <button className="btn rounded-full btn-primary text-secondary">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
