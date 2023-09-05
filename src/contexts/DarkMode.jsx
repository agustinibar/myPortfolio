import React, { createContext, useContext, useState } from 'react';


const ModoOscuroContext = createContext();


export function ModoOscuroProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ModoOscuroContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ModoOscuroContext.Provider>
  );
}


export function useModoOscuro() {
  return useContext(ModoOscuroContext);
}
