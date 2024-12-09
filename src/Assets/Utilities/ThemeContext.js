import React, { createContext, useMemo, useState } from "react";
import detectDevice from "./init/detect-device";

// const PortContext = React.createContext();

// export const ContextProvider = PortContext.Provider;
// export const ContextConsumer = PortContext.Consumer;

// console.log(detectDevice, "deviiiice")
// let deviceType = "";

// (function () {
//     deviceType = detectDevice();
//     console.log(typeof(deviceType), "type")
// }());

// console.log(idk)

export const GlobalContext = createContext();

export const GlobalContextProvider = ({children}) => {
    // let screenWidth = window.innerWidth;
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    let userDevice = useMemo(() => detectDevice(screenWidth), [screenWidth])
    let themeMode = "light";
    // setUserDevice
    const handleResize = () => {};
    let currentUrl = window.location.href;
    const upperCaseSectionsArr = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];
    const lowerCaseSectionsArr = ["home", "about", "skills", "experience", "projects", "contact"];

    return (
        <GlobalContext.Provider value={{screenWidth, setScreenWidth, userDevice, currentUrl, upperCaseSectionsArr, lowerCaseSectionsArr}}>
            {children}
        </GlobalContext.Provider>
    )
}

// export const GlobalContext = React.createContext({
    // screenWidth: window.innerWidth,
    // userDevice: detectDevice(),
    // // setUserDevice
    // handleResize: () => {},
    // currentUrl: window.location.href,
    // upperCaseSectionsArr : ["Home", "About", "Skills", "Experience", "Projects", "Contact"],
    // lowerCaseSectionsArr: ["home", "about", "skills", "experience", "projects", "contact"]
// });

export const MobileContext = React.createContext({

});

export const FormContext = React.createContext({

});


// export default PortContext;