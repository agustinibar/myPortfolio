import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false)
  
 const burgerMenu= ()=>{
  setIsOpen(!isOpen)
  };
  return (
     <div className="relative bg-white sm:hidden">
      <button onClick={burgerMenu} className="text-3xl p-2 cursor-pointer">
        <span
          className={`block bg-black h-1 w-6 mb-1 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block bg-black h-1 w-6 mb-1 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block bg-black h-1 w-6 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } bsolute top-0 left-0 w-full sm:w-auto sm:static flex flex-col justify-center items-center bg-LiteBlue text-lg space-y-6 z-50`}
      >
        <li>
          <NavLink
            to="/"
            activeClassName="text-blue-500"
            className="text-black hover:text-blue-500"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-me"
            activeClassName="text-blue-500"
            className="text-black hover:text-blue-500"
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            activeClassName="text-blue-500"
            className="text-black hover:text-blue-500"
          >
            Portfolio
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
