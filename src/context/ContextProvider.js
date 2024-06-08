import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    const savedColor = localStorage.getItem('colorMode');
    
    if (savedMode) setCurrentMode(savedMode);
    if (savedColor) setCurrentColor(savedColor);
  }, []);

  const setMode = (e) => {
    const mode = e.target.value;
    setCurrentMode(mode);
    localStorage.setItem('themeMode', mode);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider value={{ 
      currentColor, 
      currentMode, 
      activeMenu, 
      screenSize, 
      setScreenSize, 
      handleClick, 
      isClicked, 
      initialState, 
      setIsClicked, 
      setActiveMenu, 
      setCurrentColor, 
      setCurrentMode, 
      setMode, 
      setColor, 
      themeSettings, 
      setThemeSettings 
    }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
