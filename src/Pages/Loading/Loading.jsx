import React from "react";
import { MoonLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      <div className="text-center">
        {/* Logo or Brand Name */}
        <h1 className="text-4xl font-bold text-primary mb-8">LoanLink</h1>

        {/* Moon Loader */}
        <MoonLoader
          color="hsl(var(--p))" // Using primary color from DaisyUI
          size={60}
          speedMultiplier={0.8}
        />

        {/* Loading Text */}
        <p className="text-base-content/60 mt-8 text-lg animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;
