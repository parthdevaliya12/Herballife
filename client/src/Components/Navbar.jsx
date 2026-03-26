import { useState } from "react";
import { Menu, X, Home, Info, Package, Phone, LogIn } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-(--background) shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlMiwzreusA93A-JxhFwer2XtXfX0ugQ-gA&s"
              alt="logo"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-2xl font-bold text-(--primary-color)">
              Herballife
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-700">
            <a
              href="#hero"
              className="hover:text-(--primary-color) flex items-center gap-1"
            >
              <Home size={18} /> Home
            </a>

            <a
              href="#about"
              className="hover:text-(--primary-color) flex items-center gap-1"
            >
              <Info size={18} /> About
            </a>

            <a
              href="#review"
              className="hover:text-(--primary-color) flex items-center gap-1"
            >
              <Package size={18} /> Review
            </a>

            <a
              href="#contact"
              className="hover:text-(--primary-color) flex items-center gap-1"
            >
              <Phone size={18} /> Contact
            </a>

            {/* LOGIN OR USER */}
            {!user ? (
              <Link
                to="/login"
                className="text-(--primary-color) font-bold flex items-center gap-1"
              >
                <LogIn size={18} /> Login
              </Link>
            ) : (
              <div className="relative">
                {/* Avatar */}
                <div
                  onClick={() => setDropdown(!dropdown)}
                  className="h-9 w-9 rounded-full bg-(--primary-color) text-white flex items-center justify-center font-bold cursor-pointer"
                >
                  {user.name.charAt(0).toUpperCase()}
                </div>

                {/* Dropdown */}
                {dropdown && (
                  <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg border z-10">
                    <button
                      onClick={logout}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-lg text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-3 text-gray-700 font-medium">
            <a href="#hero" className="flex items-center gap-1">
              <Home size={18} /> Home
            </a>

            <a href="#about" className="flex items-center gap-1">
              <Info size={18} /> About
            </a>

            <a href="#review" className="flex items-center gap-1">
              <Package size={18} /> Review
            </a>

            <a href="#contact" className="flex items-center gap-1">
              <Phone size={18} /> Contact
            </a>

            {!user ? (
              <Link
                to="/login"
                className="text-(--primary-color) font-bold flex items-center gap-1"
              >
                <LogIn size={18} /> Login
              </Link>
            ) : (
              <button
                onClick={logout}
                className="text-left text-red-500 font-semibold"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
