import React from 'react';
import { Project } from '../components/Project';
import rickAndMorty from '../assets/rick&morty.png';
import doggie from '../assets/doggie.png'
import dreamlodge from '../assets/dreamlodge.png'
export const Portfolio = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Projects:</h1>
      <div className="my-4"></div>
      <Project
        id='rick-and-morty'
        img={rickAndMorty}
        title="Rick & Morty - Exploring the Multiverse with PERN"
        description='This exciting project represents my first foray into web development using the captivating PERN stack (PostgreSQL, Express.js, React, and Node.js) as its foundation. Inspired by the fascinating universe of "Rick & Morty", this web application allows users to explore and discover detailed information about their favorite characters and episodes from the popular television series.'
        date="April - June 2023"
      />
      <div className="my-4"></div>
        <Project
        id='doggie'
        img={doggie}
        title="Doggie - A Dog Adoption Clinic Web App"
        description='The "Doggie" project is a web application designed exclusively for a dog adoption clinic. It was developed using the PERN stack (PostgreSQL, Express.js, React, and Node.js) as its core technology stack. The primary objective of this application is to simplify and optimize the dog adoption process at the clinic, providing an efficient and user-friendly platform for both potential pet owners and the clinic staff.'
        date="June - July 2023"
      />
      <div className="my-4"></div>  
        <Project
        id='dream-lodge'
        img={dreamlodge}
        title="DreamLodge App - Innovating the Online Booking Experience"
        description='"DreamLodge App" is an exciting project that completely transforms the online booking experience. Developed from scratch, this application combines an innovative frontend built with React and Firebase with a robust backend based on Node.js and Express. A standout feature of this project is its seamless integration of MercadoPago payment gateways, ensuring secure and efficient transactions for users.'
        date="July - August 2023"
      />
     
    </div>
  );
};
