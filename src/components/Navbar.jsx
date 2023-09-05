import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useModoOscuro } from "../contexts/DarkMode";

export const Navbar = () => {
  const { darkMode, toggleDarkMode } = useModoOscuro();
  const [isOpen, setIsOpen] = useState(false);

  const burgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ul
        className={`sm:flex ${isOpen ? "" : "hidden"} ${
          darkMode ? "bg-LiteRed" : "bg-Marfil"
        } text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px]`}
      >
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-me">About me</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <button
          onClick={toggleDarkMode}
          className={`relative w-14 h-7 p-1 rounded-full cursor-pointer mt-2 ${
            darkMode ? "bg-Marine" : "bg-LiteBlue"
          }`}
        >
          <div
            className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-300 transform ${
              darkMode ? "translate-x-full" : "translate-x-0"
            }`}
          ></div>
        </button>
      </ul>
      <div className="sm:hidden">
        <button
          onClick={burgerMenu}
          className={`text-3xl p-2 cursor-pointer ${
            darkMode ? "text-Marfil" : "text-Marine"
          }`}
        >
          <span className="block bg-Marine h-1 w-6 mb-1"></span>
          <span className="block bg-Marine h-1 w-6 mb-1"></span>
          <span className="block bg-Marine h-1 w-6"></span>
        </button>
      </div>
    </>
  );
};
