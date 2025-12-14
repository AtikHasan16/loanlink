import { motion } from "framer-motion";
import { FaLock, FaHome, FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

const Forbidden = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-950 flex items-center justify-center px-4 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-yellow-400/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-10 w-96 h-96 bg-indigo-200 dark:bg-yellow-500/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 left-1/2 w-96 h-96 bg-blue-300 dark:bg-yellow-600/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Lock Icon with Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#1a4dbe] to-blue-600 dark:from-yellow-400 dark:to-yellow-500 rounded-full blur-2xl opacity-40"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative bg-gradient-to-br from-[#1a4dbe] to-blue-700 dark:from-yellow-400 dark:to-yellow-600 p-8 rounded-full shadow-2xl">
                <FaLock className="text-6xl text-white dark:text-gray-900" />
              </div>
            </div>
          </motion.div>

          {/* Error Code */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#1a4dbe] to-blue-600 dark:from-yellow-400 dark:to-yellow-500 mb-4 tracking-tight">
              403
            </h1>
          </motion.div>

          {/* Error Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4"
          >
            Access Forbidden
          </motion.h2>

          {/* Error Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto leading-relaxed"
          >
            Sorry, you don't have permission to access this page. Please contact
            your administrator if you believe this is an error.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
              className="group relative px-8 py-4 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
                Go Back
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="group relative px-8 py-4 bg-gradient-to-r from-[#1a4dbe] to-blue-700 dark:from-yellow-400 dark:to-yellow-600 text-white dark:text-gray-900 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaHome className="group-hover:scale-110 transition-transform duration-300" />
                Back to Home
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900 dark:from-yellow-500 dark:to-yellow-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-12 p-6 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl"
          >
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Error Code:
              </span>{" "}
              403 Forbidden
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              <span className="font-semibold text-gray-800 dark:text-gray-200">
                Reason:
              </span>{" "}
              Insufficient permissions
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#1a4dbe] dark:bg-yellow-400 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default Forbidden;
