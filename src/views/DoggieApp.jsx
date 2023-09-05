import React from 'react';
import { useModoOscuro } from "../contexts/DarkMode"; 

export const DoggieApp = () => {
    const { darkMode } = useModoOscuro(); 

    return (
        <div className={`bg-${darkMode ? 'Marine' : 'gray-100'} p-6 rounded-lg shadow-md text-${darkMode ? 'Marfil' : 'gray-700'}`}>
            <h2 className="text-2xl font-bold mb-4">Doggie App - Streamlining Dog Adoption</h2>
            <p className="mb-4">
                "Doggie App" is a feature-rich web application designed for a dog adoption clinic. This project employs the PERN stack (PostgreSQL, Express.js, React, and Node.js) to create a seamless and efficient platform for adopting dogs from the clinic. Users can browse and view detailed information about the available dogs, making it easier for them to find their future furry companions.
            </p>
            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className={`list-disc ml-6 mb-4 text-${darkMode ? 'Marfil' : 'gray-700'}`}>
                <li>Comprehensive Dog Profiles: Users can explore detailed profiles of dogs available for adoption. Each profile includes information such as name, breed, age, temperament, and more.</li>
                <li>Seamless Adoption Process: "Doggie App" streamlines the dog adoption process, allowing users to submit adoption requests, schedule visits, and complete necessary paperwork online.</li>
                <li>Interactive Search and Filtering: Users can search for dogs based on specific criteria such as breed, size, and location, making it easy to find dogs that match their preferences.</li>
                <li>User-Friendly Design: The application prioritizes a user-friendly design, ensuring an intuitive and enjoyable experience for users.</li>
                <li>Secure Data Handling: Security measures are implemented to safeguard user data and ensure a safe and trustworthy platform.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Technologies Used:</h3>
            <p className={`mb-4 text-${darkMode ? 'Marfil' : 'gray-700'}`}>
                Frontend: React.js, HTML, CSS, Tailwind CSS. <br />
                Backend: Node.js, Express.js, PostgreSQL. <br />
                Deployment: The application is deployed on a web server for online access.
            </p>
            <h3 className="text-xl font-semibold mb-2">Lessons Learned:</h3>
            <p className={`mb-4 text-${darkMode ? 'Marfil' : 'gray-700'}`}>
                "Doggie App" allowed me to gain valuable experience in full-stack web development, from building a user-friendly frontend to implementing a secure backend. Working on this project enhanced my skills in data management and user interaction, and it deepened my understanding of the PERN stack.
            </p>
            <h3 className="text-xl font-semibold mb-2">Future Goals:</h3>
            <p className={`text-${darkMode ? 'Marfil' : 'gray-700'}`}>
                In the future, I plan to further improve and expand "Doggie App." This includes adding features such as user accounts, adoption tracking, and real-time notifications. I am committed to making the dog adoption process as smooth and enjoyable as possible for both users and the clinic staff.
            </p>
        </div>
    );
}

