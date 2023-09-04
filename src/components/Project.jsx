import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
export const Project = ({ id, title, description, img, date }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative bg-white rounded-lg shadow-md overflow-hidden">
      <img src={img} alt={title} className="w-full h-auto" />

      <div className="absolute inset-0 p-6 flex flex-col justify-end bg-black bg-opacity-50 transition-opacity duration-300 opacity-0 hover:opacity-100">
        <h2 className="text-white text-2xl font-bold mb-2">{title}</h2>
        {expanded ? (
          <p className="text-white">{description}</p>
        ) : (
          <p className="text-white truncate">{description}</p>
        )}
        <NavLink to={`/${id}`}>
        <button
          onClick={toggleDescription}
          className="text-blue-500 hover:underline mt-2"
        >
          Read More
        </button>

        </NavLink>
        <p className="text-white mt-2">{date}</p>
      </div>
    </div>
  );
};



