import React from "react";
import { useModoOscuro } from "../contexts/DarkMode";
import { ArticlesContainer } from "../components/ArticlesContainer";
import { Header } from "../components/Header";
import { Lifecycle } from "../components/Lifecycle";
import { MainArticle } from "../components/MainArticle";

export const Home = () => {
  const { darkMode } = useModoOscuro(); 

  return (
    <main
      className={`px-4 pt-6 ${
        darkMode ? "bg-LiteRed text-Marine":"bg-Marfil text-LiteBlue"
      }`}
    >
      <div className="sm:flex sm:gap-8">
        <MainArticle />
        <Lifecycle />
      </div>
      <ArticlesContainer />
    </main>
  );
};
