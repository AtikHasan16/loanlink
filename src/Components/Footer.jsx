import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-primary text-secondary pt-20 pb-10 mt-32 jost">
      {/* Wave SVG Shape - Placed absolutely at the top, pointing UP */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -mt-16 md:-mt-28 lg:-mt-32">
        <svg
          className="relative block w-full h-16 md:h-28 lg:h-32"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-primary"
            transform="scale(1, -1) translate(0, -120)" // Flip vertically to point up
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-primary shadow-lg transform rotate-3">
                <span className="font-bold text-2xl">LL</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight">LoanLink</h2>
            </div>
            <p className="text-secondary/80 max-w-sm text-lg leading-relaxed">
              Explore the world of financial possibilities with LoanLink — your
              trusted partner for secure, fast, and transparent microloan
              solutions.
            </p>
            <div className="flex gap-4 pt-2">
              {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map(
                (Icon, i) => (
                  <button
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary/10 hover:bg-secondary hover:text-primary transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
                  >
                    <Icon size={18} />
                  </button>
                ),
              )}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-8 border-b border-secondary/20 pb-4 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "All Loans", path: "/loans" },
                { name: "Dashboard", path: "/dashboard" },
                { name: "About Us", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-secondary/80 hover:text-white hover:translate-x-2 transition-all duration-300 group"
                  >
                    <FaChevronRight
                      size={12}
                      className="text-secondary/50 group-hover:text-white transition-colors"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-8 border-b border-secondary/20 pb-4 inline-block">
              Get In Touch
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
                  <FaEnvelope size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary/60 uppercase tracking-wider mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:info@loanlink.com"
                    className="text-lg hover:text-white transition-colors"
                  >
                    info@loanlink.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
                  <FaPhoneAlt size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary/60 uppercase tracking-wider mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+8801234567890"
                    className="text-lg hover:text-white transition-colors"
                  >
                    +880 1234 567 890
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary/60 uppercase tracking-wider mb-1">
                    Address
                  </h4>
                  <p className="text-lg leading-snug">
                    42 LoanLink Street, <br />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-secondary/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary/60">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-white font-semibold">LoanLink</span>. All
            rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <p className="md:ml-auto">
            Developed by{" "}
            <a
              href="https://github.com/AtikHasan16"
              target="_blank"
              rel="noopener noreferrer"
            >
              MD Atik Hasan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
