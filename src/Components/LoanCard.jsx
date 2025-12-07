import React from "react";
import { Link } from "react-router";
import { FaArrowRight, FaMoneyBillWave, FaPercent } from "react-icons/fa";

const LoanCard = ({ loan }) => {
  const { title, category, interest, maxLimit, image } = loan;

  return (
    <div className="group h-full bg-accent border border-base-200 rounded-3xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col relative shadow-lg">
      {/* Hover Gradient Border Effect */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

      {/* Image Container */}
      <div className="h-56 overflow-hidden relative">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <span className="badge bg-base-100/80 backdrop-blur-md border border-base-200 text-primary font-bold px-4 py-3 shadow-md">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col grow relative z-20">
        <h3 className="text-2xl font-bold mb-4  group-hover:text-primary transition-colors line-clamp-1">
          {title}
        </h3>

        <div className="space-y-4 mb-8 grow">
          {/* Interest Rate */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-base-200/50 group-hover:bg-primary/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-primary">
                <FaPercent />
              </div>
              <span className="text-sm font-medium /70">Interest Rate</span>
            </div>
            <span className="text-xl font-bold text-primary">{interest}%</span>
          </div>

          {/* Max Limit */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-base-200/50 group-hover:bg-primary/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FaMoneyBillWave />
              </div>
              <span className="text-sm font-medium /70">Max Limit</span>
            </div>
            <span className="text-xl font-bold text-primary">
              ${maxLimit.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <Link to={`/loan-details/${title}`} className="mt-auto">
          <button className="w-full btn btn-lg rounded-xl bg-base-100 border-2 border-primary/20 hover:border-primary hover:bg-primary hover:text-white  transition-all duration-300 flex items-center justify-between group/btn px-6">
            <span className="font-bold">View Details</span>
            <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoanCard;
