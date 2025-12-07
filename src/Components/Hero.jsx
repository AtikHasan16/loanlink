import React from "react";
import { motion } from "motion/react";
import heroImage from "../assets/hero_bank_cards.png"; // Importing the generated image
import { Link } from "react-router";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen  flex items-center justify-center overflow-hidden jost">
      {/* Abstract Background Shapes (Animated) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circle 1 */}
        <motion.div
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-70 left-80 w-32 h-32 bg-primary rounded-full blur-3xl"
        ></motion.div>
        {/* Circle 2 */}
        <motion.div
          animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 w-64 h-64 bg-secondary rounded-full blur-3xl"
        ></motion.div>
        {/* Geometric Shape */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-base-content/5 rounded-full opacity-30"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="uppercase tracking-widest text-primary font-bold text-sm">
              Manage Your Finance
            </span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-4 text-base-content">
              Your banking <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-gray-500">
                made easier.
              </span>
            </h1>
            <p className="text-base-content/70 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mt-6 leading-relaxed">
              Experience the future of financial management with our intuitive
              platform. Secure, fast, and designed for your growth.
            </p>

            {/* Input & Subscribe/CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <Link
                to="/register"
                className="btn-main text-lg px-8 py-3 h-auto"
              >
                Get Started
              </Link>
              <Link
                to="/request-loan"
                className="btn bg-transparent border-none shadow-none text-primary   text-lg h-auto"
              >
                Request Loan
              </Link>
            </div>

            {/* User Avatars / Social Proof */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-4">
                <img
                  className="w-10 h-10 rounded-full border-2 border-base-100"
                  src="https://img.daisyui.com/images/profile/demo/1@94.webp"
                  alt="User 1"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-base-100"
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="User 2"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-base-100"
                  src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                  alt="User 3"
                />
              </div>
              <div className="text-sm font-medium">
                <span className="font-bold text-primary">5k+</span> Active Users
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <motion.img
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            src={heroImage}
            alt="Banking Visual"
            className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-4xl"
          />

          {/* Decorative Stars/Elements */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -top-10 right-10 text-yellow-400 text-4xl"
          >
            ✦
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-20 -left-10 text-primary text-3xl"
          >
            ★
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
