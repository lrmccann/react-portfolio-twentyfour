import React, { createContext, useMemo, useState } from "react";
import detectDevice from "./init/detect-device";


export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    let userDevice = useMemo(() => detectDevice(screenWidth), [screenWidth])
    const checkThemePreference = document.documentElement.classList.toggle(
        'dark',
        localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      );
      let themeMode = checkThemePreference === true ? "dark" : "light";
    // let themeMode = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    let currentUrl = window.location.href;
    const upperCaseSectionsArr = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
    const lowerCaseSectionsArr = ["home", "about", "skills", "experience", "projects", "contact"];

    return (
        <GlobalContext.Provider value={{screenWidth, setScreenWidth, userDevice, currentUrl, upperCaseSectionsArr, lowerCaseSectionsArr, themeMode}}>
            {children}
        </GlobalContext.Provider>
    )
}

export const MobileContext = React.createContext({

});

export const FormContext = React.createContext({

});