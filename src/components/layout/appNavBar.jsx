






import React, { useState } from "react";
import logo from "/public/hridoyislampng.png";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const AppNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAnimatedNav = (path) => {
    if (location.pathname === path) return; // already on same page
    setIsExiting(true);
    setTimeout(() => {
      navigate(path);
      setIsExiting(false);
    }, 400); // match with animation duration
  };

  return (
    <motion.header
      initial={{ opacity: 1 }}
      animate={{ opacity: isExiting ? 0 : 1 }}
      transition={{ duration: 0.4 }}
    >
      <a href="#" className="nav-bar">
        <img className="nav-logo" src={logo} alt="logo" />
      </a>

      <div id="menu-toggle" onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      <nav className={isOpen ? "active" : ""}>
        <span onClick={() => handleAnimatedNav("/")}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Home
          </NavLink>
        </span>
        <span onClick={() => handleAnimatedNav("/Services")}>
          <NavLink
            to="/Services"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Services
          </NavLink>
        </span>
        <span onClick={() => handleAnimatedNav("/Resume")}>
          <NavLink
            to="/Resume"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Resume
          </NavLink>
        </span>
        <span onClick={() => handleAnimatedNav("/Work")}>
          <NavLink
            to="/Work"
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            Work
          </NavLink>
        </span>
        <span onClick={() => handleAnimatedNav("/Contact")}>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive ? "active-link contact-btn" : "contact-btn"
            }
          >
            Contact
          </NavLink>
        </span>
      </nav>
    </motion.header>
  );
};

export default AppNavBar;
