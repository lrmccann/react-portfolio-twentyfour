import React, { createContext, useMemo, useState, useEffect } from "react";
import detectDevice from "./init/detect-device";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentTab, setCurrentTab] = useState();
  const checkThemePreference = document.documentElement.classList.toggle(
    "dark",
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  const [themeMode, setThemeMode] = useState();

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeMode("dark");
  }else{
    setThemeMode("light");
  }
  }, [checkThemePreference]);

  let userDevice = useMemo(() => detectDevice(screenWidth), [screenWidth]);
  let currentUrl = window.location.href;
  const upperCaseSectionsArr = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];
  const lowerCaseSectionsArr = [
    "home",
    "about",
    "skills",
    "experience",
    "projects",
    "contact",
  ];

  return (
    <GlobalContext.Provider
      value={{
        screenWidth,
        userDevice,
        currentUrl,
        upperCaseSectionsArr,
        lowerCaseSectionsArr,
        themeMode,
        setThemeMode,
        currentTab,
        setCurrentTab,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const MobileContext = React.createContext({});

export const FormContext = React.createContext({});
