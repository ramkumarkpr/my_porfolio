import React, { useState } from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../index.css";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full bg-black text-white">
      <nav className="flex justify-between items-center p-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img src={logo} className="w-14 rounded-full" alt="Logo" />
          <h4 className="text-xl md:text-2xl font-bold">RK</h4>
        </div>

        <ul className="hidden md:flex gap-6 text-lg font-semibold">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/skills", label: "Skills" },
            { to: "/projects", label: "Projects" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <li key={to}>
              <Link className="snow-hover" to={to}>
                {label}
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="snowflake"></span>
                ))}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-black gap-4 py-4 text-lg font-semibold">
          <li>
            <Link onClick={toggleMenu} className="hover:text-gray-400" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              className="hover:text-gray-400"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              className="hover:text-gray-400"
              to="/skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              className="hover:text-gray-400"
              to="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              onClick={toggleMenu}
              className="hover:text-gray-400"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default HeaderComponent;
