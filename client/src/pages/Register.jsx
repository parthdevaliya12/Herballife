import React from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { registerUser } from "../api/authApi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await registerUser(form);

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

    navigate("/login");
    toast.success("Register success")
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-(--background) px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-(--primary-color)">
          Create Account
        </h2>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="text-gray-600 text-sm">Full Name</label>
            <div className="flex items-center border rounded-lg mt-1 px-3">
              <User size={18} className="text-gray-400" />
              <input
                type="text"
                name="name"
                onChange={handleChange} 
                placeholder="Enter your name"
                className="w-full px-3 py-2 outline-none"
              required/>
            </div>
          </div>

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
              required/>
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
                placeholder="Create password"
                className="w-full px-3 py-2 outline-none"
              required/>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-(--primary-color) text-white py-2 rounded-lg font-semibold hover:opacity-90 transition flex items-center justify-center gap-2"
          >
            <UserPlus size={18} /> Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-600 text-sm mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-(--primary-color) font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
