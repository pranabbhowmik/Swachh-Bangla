import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import useAuth from "../../hooks/useAuth";
import binImg from "../../assets/dustbin.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { login, register, loading, error } = useAuth();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password } = formData;
      const result = isSignup
        ? await register(name, email, password)
        : await login(email, password);

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      navigate("/");
      // TODO: store token or redirect to dashboard
    } catch (err) {
      console.error("Auth Error:", err);
    }
  };

  return (
    <div className="relative min-h-screen font-poppins bg-gradient-to-br from-green-100 via-white to-blue-100 flex flex-col items-center px-4 py-6 sm:py-10 sm:px-6 overflow-hidden">
      {/* Dustbin Image */}
      <motion.img
        src={binImg}
        alt="Recycle Bin"
        className="absolute top-6 right-3 w-44"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      {/* Heading */}
      <motion.div
        className="text-left w-full max-w-sm mt-28 sm:mt-36"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold leading-tight text-gray-800">
          Hello User <br />
          Welcome Back
        </h1>
        <p className="text-sm text-gray-600 mt-2">
          Together, let’s clean your space and our planet🌱
        </p>
      </motion.div>

      {/* Form Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isSignup ? "signup" : "signin"}
          className="w-full max-w-sm bg-white mt-8 rounded-xl border p-6 shadow-lg z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-center text-base font-semibold mb-4 text-gray-800">
            {isSignup ? "Sign up to continue" : "Sign in to continue"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignup && (
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border rounded px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
                <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
              </div>
            )}

            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border rounded px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            </div>

            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full border rounded px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <Lock className="absolute left-3 top-2.5 w-4 h-4 text-gray-500" />
            </div>

            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-green-400" : "bg-green-600 hover:bg-green-700"
              } text-white rounded py-2 text-sm transition`}
            >
              {loading ? "Please wait..." : isSignup ? "Sign Up" : "Sign In"}
            </motion.button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="text-green-600 font-semibold hover:underline"
            >
              {isSignup ? "Sign In" : "Sign Up"}
            </button>
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Login;
