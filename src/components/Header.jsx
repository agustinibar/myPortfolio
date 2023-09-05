import React from "react";
import { NavLink } from "react-router-dom";
import { useModoOscuro } from "../contexts/DarkMode"; 
import { Navbar } from "./Navbar";

export const Header = () => {
  const { darkMode } = useModoOscuro(); 

  return (
    <div
      className={`p-4 flex place-content-between ${
        darkMode ? "bg-LiteRed text-Marine":"bg-Marfil text-LiteBlue"
      }`}
    >
      <NavLink to={"/"}>
        <h1 className="text-2xl font-bold">Agustin Ibar</h1>
      </NavLink>
      <Navbar />
    </div>
  );
};
