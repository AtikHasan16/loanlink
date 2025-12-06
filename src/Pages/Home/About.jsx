import React from "react";

/**
 * About page (dummy)
 * Purpose: Give a concise, attractive overview of LoanLink with placeholder text.
 * - No network or interactive functionality included.
 */
const About = () => {
  return (
    <section className="px-4 py-12 jost">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold">About LoanLink</h1>
          <p className="mt-3 text-base-content/70 max-w-3xl mx-auto">
            LoanLink is a lightweight microloan request & approval tracker built
            to streamline lending workflows for community lenders and borrowers.
            The platform replaces manual paperwork with a clear, auditable
            digital process — from application to repayment.
          </p>
        </div>

        {/* Three columns: Mission, What we do, Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="card p-6 bg-accent shadow-sm">
            <h3 className="text-lg font-semibold">Our Mission</h3>
            <p className="text-sm text-base-content/70 mt-2">
              Empower small borrowers with fair, fast access to microcredit by
              providing transparent tools for application, verification, and
              repayment tracking.
            </p>
          </div>

          <div className="card p-6 bg-accent shadow-sm">
            <h3 className="text-lg font-semibold">What We Do</h3>
            <p className="text-sm text-base-content/70 mt-2">
              LoanLink centralizes loan products, automates officer reviews,
              supports role-based dashboards, and helps managers approve or
              reject requests with clear audit trails.
            </p>
          </div>

          <div className="card p-6 bg-accent shadow-sm">
            <h3 className="text-lg font-semibold">Core Values</h3>
            <p className="text-sm text-base-content/70 mt-2">
              Security, fairness, and accessibility. We build with privacy and
              role-based controls in mind so institutions can serve their
              communities responsibly.
            </p>
          </div>
        </div>

        {/* Features list */}
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="list-disc list-inside text-base-content/70">
              <li>Responsive UI with Tailwind + DaisyUI</li>
              <li>Firebase authentication with role-based access</li>
              <li>Manager and admin dashboards with analytics</li>
            </ul>
            <ul className="list-disc list-inside text-base-content/70">
              <li>Loan product management (CRUD)</li>
              <li>Application review workflow (approve/reject)</li>
              <li>Payment integration and repayment tracking</li>
            </ul>
          </div>
        </div>

        {/* Team / CTA */}
        <div className="card p-6 bg-accent shadow-sm text-center">
          <h3 className="text-xl font-semibold">Built by</h3>
          <p className="text-sm text-base-content/70 mt-2">
            MD Atik Hasan — developer and maintainer. This project is a demo
            implementation built for testing role-based loan workflows.
          </p>
          <div className="mt-6">
            <button className="btn rounded-full bg-primary text-secondary">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
