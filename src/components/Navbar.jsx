import { useState } from "react";

export const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false)
  
 const burgerMenu= ()=>{
  setIsOpen(!isOpen)
  };
  return (
    <>
      <ul className={`sm:flex ${isOpen ? '' : 'hidden'} text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px]`}>
        <li><a href="http://localhost:5173">Home</a></li>
        <li><a href="http://localhost:5173/about-me">About me</a></li>
        <li><a href="http://localhost:5173/portfolio">Portfolio</a></li>
        <li><a href="http://localhost:5173/contact">Contact</a></li>
      </ul>
      <div className="sm:hidden">
        <button onClick={burgerMenu}className="text-3xl p-2 cursor-pointer">
          <span className="block bg-black h-1 w-6 mb-1"></span>
          <span className="block bg-black h-1 w-6 mb-1"></span>
          <span className="block bg-black h-1 w-6"></span>
        </button>
      </div>
    </>
  );
};
