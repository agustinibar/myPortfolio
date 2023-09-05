import React from 'react';
import { useModoOscuro } from "../contexts/DarkMode"; 
export const RickAndMorty = () => {
    const { darkMode } = useModoOscuro(); 

    return (
        <div className={`bg-${darkMode ? 'Marine' : 'gray-100'} p-6 rounded-lg shadow-md text-${darkMode ? 'Marfil' : 'gray-700'}`}>
            <h2 className="text-2xl font-bold mb-4">Rick & Morty - Exploring the Multiverse with PERN</h2>
            <p className="mb-4">
                This exciting project represents my first foray into web development using the captivating PERN stack (PostgreSQL, Express.js, React, and Node.js) as its foundation. Inspired by the fascinating universe of "Rick & Morty," this web application allows users to explore and discover detailed information about their favorite characters and episodes from the popular television series.
            </p>
            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className={`list-disc ml-6 mb-4 text-${darkMode ? 'Marfil' : 'gray-700'}`}>
                <li>Character Exploration: Users can navigate through an extensive list of characters that have appeared in the "Rick & Morty" series. Each character has an individual profile page with detailed information such as name, species, gender, status, origin, and more.</li>
                <li>Episode Exploration: The application enables users to search and explore episodes from the series. Episodes include details such as name, season, air date, and a list of characters appearing in each episode.</li>
                <li>Advanced Search and Filtering: Users can perform specific searches using a search bar and apply filters to find characters or episodes by criteria such as name, species, gender, and more.</li>
                <li>Attractive User Interface: The application's design has been carefully crafted to provide an engaging and user-friendly experience. Responsive design elements ensure accessibility on various devices.</li>
                <li>Secure Backend: Security is a priority, and security measures have been implemented on the backend to protect data and ensure a safe user experience.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Technologies Used:</h3>
            <p className={`mb-4 text-${darkMode ? 'Marfil' : 'gray-700'}`}>
                Frontend: React.js, HTML, CSS, Tailwind CSS. <br />
                Backend: Node.js, Express.js, PostgreSQL. <br />
                External API: The public Rick & Morty API is used to fetch up-to-date series data. <br />
                Deployment: The application is deployed on a web server for online access.
            </p>
            <h3 className="text-xl font-semibold mb-2">Lessons Learned:</h3>
            <p className={`mb-4 text-${darkMode ? 'Marfil' : 'gray-700'}`}>
                This project provided me with the opportunity to learn and apply a wide range of technologies and skills, from building a backend API to crafting an attractive user interface on the frontend. I also gained experience in handling external APIs and manipulating dynamic data to deliver a rich and engaging user experience.
            </p>
            <h3 className="text-xl font-semibold mb-2">Future Goals:</h3>
            <p className={`text-${darkMode ? 'Marfil' : 'gray-700'}`}>
                In the future, I plan to continue enhancing and expanding this project. This includes adding new features such as favorites, user comments, and a more interactive user interface. Additionally, I am open to exploring other technologies and expanding my knowledge in web development. <br />
                This project is a testament to my passion for programming, my ability to learn new technologies, and my desire to create engaging and functional web applications. I am excited to continue advancing in my web development career and taking on new and exciting challenges.
            </p>
        </div>
    );
}


