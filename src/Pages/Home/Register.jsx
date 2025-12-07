/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { FaGoogle, FaGithub, FaEye } from "react-icons/fa";
import { HiEyeOff } from "react-icons/hi";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const Register = () => {
  const { githubLogin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPass, setShowPass] = useState(false);
  // console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successful");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="py-10 flex items-center justify-center jost">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-accent rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2"
      >
        {/* Left Side - Blue Gradient & Text */}
        <div className="hidden md:flex flex-col justify-center items-center bg-linear-to-br from-primary to-black p-12 text-center relative overflow-hidden text-white">
          {/* Abstract Background Shapes */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl"></div>

          <div className="z-10 relative">
            <h1 className="text-5xl font-bold mb-4 ">JOIN US TODAY</h1>
            <h2 className="text-xl font-medium tracking-widest mb-6 opacity-90 uppercase">
              Start Your Journey
            </h2>
            <p className="opacity-80 leading-relaxed max-w-sm mx-auto">
              Create your account to apply for loans, track approvals, and
              unlock financial possibilities.
            </p>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="p-10 md:p-12 flex flex-col justify-center ">
          <div className="mb-8 text-center md:text-left">
            <h2 className="text-3xl font-bold text-primary">Create Account</h2>
            <p className="text-base-content/60 mt-2">
              Enter your details to register
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered text-lg w-full rounded-xl focus:border-primary focus:ring-1 focus:ring-primary  py-6"
                {...register("name", { required: true })}
              />
            </div>

            {/* Email Input */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-medium">Email Address</span>
              </label>
              <input
                type="email"
                placeholder="name@example.com"
                className="input input-bordered text-lg w-full rounded-xl focus:border-primary focus:ring-1 focus:ring-primary  py-6"
                {...register("email", { required: true })}
              />
            </div>

            {/* Photo Upload Input */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-medium">Profile Image</span>
              </label>
              <div className="relative">
                <input
                  type="file"
                  className="file-input file-input-bordered file-input-primary w-full rounded-xl "
                  {...register("photo", { required: true })}
                />
              </div>
            </div>

            {/* Role SelectionDropdown */}
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text font-medium">Role</span>
              </label>
              <select
                className="select select-bordered text-lg w-full rounded-xl focus:border-primary focus:ring-1 focus:ring-primary"
                {...register("role", { required: true })}
                defaultValue="borrower"
              >
                <option value="borrower">Borrower</option>
                <option value="manager">Manager</option>
              </select>
            </div>

            {/* Password Input */}
            <div className="form-control w-full mb-2">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="********"
                  className="input input-bordered text-lg w-full rounded-xl focus:border-primary focus:ring-1 focus:ring-primary  pr-10 py-6"
                  {...register("password", { required: true })}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 hover:text-primary transition-colors"
                >
                  {showPass ? <HiEyeOff size={24} /> : <FaEye size={24} />}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button className="btn-main w-full shadow-lg mt-8 shadow-primary/30">
              Sign Up
            </button>
          </form>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-base-300"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="px-2 bg-base-100 text-base-content uppercase text-xs font-bold tracking-wider">
                  Or register with
                </span>
              </div>
            </div>

            <div className="flex gap-4 justify-center mt-6">
              <button
                onClick={handleGithubLogin}
                className="btn btn-outline btn-block hover:btn-primary hover:text-white rounded-full px-6 gap-2"
              >
                <FaGithub className="text-lg" />
                <span className="hidden sm:inline">GitHub</span>
              </button>
            </div>
          </div>

          <div className="text-center mt-8 text-base-content/70">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-primary font-bold hover:underline"
            >
              Sign In
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
