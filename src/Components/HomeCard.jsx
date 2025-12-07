import React from "react";
import LoanCard from "./LoanCard";
import { Link } from "react-router";

const dummyLoans = [
  {
    id: 1,
    title: "Personal Loan",
    category: "Personal",
    interest: 8.5,
    maxLimit: 50000,
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    title: "Business Startup Loan",
    category: "Business",
    interest: 12.0,
    maxLimit: 200000,
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    title: "Home Renovation Loan",
    category: "Housing",
    interest: 6.5,
    maxLimit: 100000,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    title: "Education Loan",
    category: "Education",
    interest: 5.0,
    maxLimit: 75000,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 5,
    title: "Car Purchase Loan",
    category: "Vehicle",
    interest: 9.0,
    maxLimit: 40000,
    image:
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 6,
    title: "Medical Emergency Loan",
    category: "Health",
    interest: 7.0,
    maxLimit: 30000,
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
  },
];

const HomeCard = () => {
  return (
    <section className="py-24 container mx-auto px-6 jost">
      <div className="text-center mb-16">
        <span className="text-primary font-bold tracking-widest uppercase text-sm">
          Opportunities
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">Available Loans</h2>
        <p className="text-base-content/60 mt-4 max-w-2xl mx-auto text-lg">
          Explore our range of loan options designed to meet your specific
          financial needs. From personal growth to business expansion, we have
          you covered.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyLoans.map((loan) => (
          <div key={loan.id} className="h-full">
            <LoanCard loan={loan} />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link
          to="/all-loans"
          className="btn btn-outline btn-lg rounded-full px-12 hover:bg-primary hover:text-white transition-all"
        >
          View All Loans
        </Link>
      </div>
    </section>
  );
};

export default HomeCard;
