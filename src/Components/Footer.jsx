import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center bg-accent p-8 text-base-content dark:text-base-content jost">
      <div className="w-full">
        {/* Logo & Description */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
              <span className="text-secondary font-bold text-2xl">LL</span>
            </div>
            <h2 className="text-3xl font-bold text-primary">LoanLink</h2>
          </div>
          <p className="max-w-2xl">
            Streamlining microloan applications, approvals, and repayment
            tracking.
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-3 ">
          <button className="btn btn-circle btn-sm bg-primary hover:bg-primary/80 border-none text-secondary">
            <FaFacebook size={16} />
          </button>
          <button className="btn btn-circle btn-sm bg-primary hover:bg-primary/80 border-none text-secondary">
            <FaTwitter size={16} />
          </button>
          <button className="btn btn-circle btn-sm bg-primary hover:bg-primary/80 border-none text-secondary">
            <FaLinkedin size={16} />
          </button>
          <button className="btn btn-circle btn-sm bg-primary hover:bg-primary/80 border-none text-secondary">
            <FaInstagram size={16} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <span className="link link-hover hover:text-primary cursor-pointer">
            Privacy
          </span>
          <span className="link link-hover hover:text-primary cursor-pointer">
            Contact
          </span>
          <span className="link link-hover hover:text-primary cursor-pointer">
            Blog
          </span>
        </div>

        {/* Copyright */}
        <div className="border-t border-accent pt-4 text-xs">
          <p>
            &copy; {currentYear}{" "}
            <span className="font-semibold text-primary">LoanLink</span>. All
            rights reserved.
          </p>
          <p className="mt-1">
            Developed with <span className="text-red-500">❤️</span> by MD Atik
            Hasan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
