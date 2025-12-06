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
import { BsQuestion, BsQuestionCircle } from "react-icons/bs"; // Theme toggle

// Socials (Footer)
import {} from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to={"/"}>
          <BiHome></BiHome>Home
        </NavLink>
      </li>
      <li>
        <NavLink to={"/all-loans"}>
          <BiMoney></BiMoney> All-Loans
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>
          About Us
          <BsQuestionCircle></BsQuestionCircle>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>
          Contact Us
          <MdCall></MdCall>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/dashboard"}>
          Dashboard
          <MdDashboard></MdDashboard>
        </NavLink>
      </li>
      <li>
        <Link to={"/register"} className="btn  btn-primary">
          Register
          <BiUserPlus></BiUserPlus>
        </Link>
      </li>
      <li>
        <Link to={"/login"} className="btn  btn-primary">
          Login
          <BiLogIn></BiLogIn>
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar py-4 bg-base-100 shadow-sm lato fixed top-0 ">
        <div className="navbar-start w-fit">
          <Link
            to={"/"}
            className="btn border-none bg-transparent shadow-none text-3xl text-primary"
          >
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
        </div>
        <div className="navbar-end hidden w-full xl:flex">
          <ul className="text-lg text menu menu-horizontal font-semibold gap-4 ">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
