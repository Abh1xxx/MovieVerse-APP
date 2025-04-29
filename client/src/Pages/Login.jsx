import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../axios/axiosInstance";
// import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";  // ✅


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/api/v1/user/login", formData);
      if (response.data.success) {
        const token = response.data.token;
        localStorage.setItem("token", token);

        // ✅ Decode the token to get the role
        const decoded = jwtDecode(token);

        alert("✅ Login Successful!");
        // console.log("decoded",decoded);
        // output->decoded 
        // Object { id: "67f4d06b453e1de7bff7c6fb", role: "admin", iat: 1745910627, exp: 1746774627 }
        
        // ✅ Navigate based on role
        if (decoded.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/User-Home");
        }
      } else {
        alert("❌ " + response.data.message);
      }
    } catch (error) {
      console.error("❌ Login Error:", error.message);
      alert("❌ Login failed. Please try again.");
    }
  };

  return (
    <div className="bg-gray-900 text-white flex items-center justify-center min-h-screen p-6">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-cyan-200">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-cyan-200">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-cyan-500 hover:bg-cyan-600 rounded text-white font-semibold transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-cyan-400 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
