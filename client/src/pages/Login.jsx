import React from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, LogIn } from "lucide-react";
import { loginUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";


const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(form);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    toast.success("Login success")
    navigate("/");

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--background) px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-(--primary-color)">
          Login
        </h2>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="text-gray-600 text-sm">Email</label>
            <div className="flex items-center border rounded-lg mt-1 px-3">
              <Mail size={18} className="text-gray-400" />
              <input
                type="email"
                name="email"
                 onChange={handleChange} 
                placeholder="Enter your email"
                className="w-full px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-gray-600 text-sm">Password</label>
            <div className="flex items-center border rounded-lg mt-1 px-3">
              <Lock size={18} className="text-gray-400" />
              <input
                type="password"
                name="password"
                 onChange={handleChange} 
                placeholder="Enter password"
                className="w-full px-3 py-2 outline-none"
              />
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end text-sm">
            <a href="#" className="text-(--primary-color) hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-(--primary-color) text-white py-2 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <LogIn size={18} /> Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-(--primary-color) font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
