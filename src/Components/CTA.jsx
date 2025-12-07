import React from "react";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-24 jost">
      <div className="container mx-auto px-6">
        <div className="relative rounded-[3rem] overflow-hidden bg-linear-to-br from-primary to-black text-white p-12 md:p-20 text-center">
          {/* Abstract Background Shapes - Same as Login */}
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
              Join thousands of satisfied customers and take the first step
              towards achieving your financial goals today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/register">
                <button className="btn btn-lg bg-white text-primary hover:bg-white/90 border-none rounded-full px-10 shadow-xl">
                  Apply Now
                  <FaArrowRight />
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn btn-lg bg-transparent text-white hover:bg-white/10 border-2 border-white rounded-full px-10">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
