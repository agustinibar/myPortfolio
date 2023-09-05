import React from 'react';
import { useModoOscuro } from "../contexts/DarkMode"; 

export const DreamLodge = () => {
    const { darkMode } = useModoOscuro(); 

    return (
        <div className={`bg-${darkMode ? 'Marine' : 'gray-100'} p-6 rounded-lg shadow-md text-${darkMode ? 'Marfil' : 'gray-700'}`}>
            <h2 className="text-2xl font-bold mb-4">DreamLodge App - Transforming the Hospitality Industry</h2>
            <p className="mb-4">
                "DreamLodge App" is a groundbreaking web application dedicated to revolutionizing the hospitality industry. This project involves the development of a sophisticated tool designed to enhance the management of lodging establishments. It streamlines operations, improves customer experiences, and sets new standards in the world of hospitality.
            </p>
            <h3 className="text-xl font-semibold mb-2">Key Features:</h3>
            <ul className={`list-disc ml-6 mb-4 text-${darkMode ? 'Marfil' : 'gray-700'}`}>
                <li>Efficient Lodging Management: "DreamLodge App" provides lodging owners with a comprehensive platform to efficiently manage their establishments. Features include room bookings, guest check-ins, and inventory control.</li>
                <li>Enhanced Customer Experiences: The application is designed with a focus on enhancing guest experiences. It offers features like personalized recommendations, in-room services, and real-time customer support.</li>
                <li>Integration with Leading Platforms: "DreamLodge App" seamlessly integrates with popular booking platforms and payment gateways, ensuring a smooth and reliable booking process for guests.</li>
                <li>User-Friendly Interface: The application prioritizes a user-friendly design, making it easy for both lodging owners and guests to navigate and utilize its features.</li>
                <li>Data Security: Robust security measures are in place to protect sensitive guest data and ensure trustworthiness.</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Technologies Used:</h3>
            <p className={`mb-4 text-${darkMode ? 'Marfil' : 'gray-700'}`}>
                Frontend: React.js, HTML, CSS, Tailwind CSS. <br />
                Backend: Node.js, Express.js, Firebase. <br />
                Integration: Integration with third-party booking platforms and payment gateways.
            </p>
            <h3 className="text-xl font-semibold mb-2">Current Status:</h3>
            <p className={`text-${darkMode ? 'Marfil' : 'gray-700'}`}>
                The "DreamLodge App" project is currently ongoing, with continuous development efforts aimed at refining and expanding the application's features. We are committed to delivering a transformative solution for lodging establishments and their guests.
            </p>
        </div>
    );
}

