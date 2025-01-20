import Header from "./Components/Header";
import watchScreenSize from "./Assets/Utilities/width-observer";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./Assets/Utilities/ThemeContext";
import { observer } from "./Assets/utilities";
import emitter from "./Assets/Utilities/event-bus";
import MainContainer from "./Pages/MainContainer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Skill from "./Pages/Skill";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

export default function App() {
  const {
    screenWidth,
    setScreenWidth,
    themeMode,
    lowerCaseSectionsArr,
    currentTab,
  } = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState(currentTab);

  // set localstorage object's theme attribute to user preference after detecting browser pref in context
  useEffect(() => {
    console.log(themeMode, "theme mode")
    themeMode === "light"
      ? document.documentElement.classList.remove("light")
      : document.documentElement.classList.add("dark");
  }, [themeMode]);

  // Watch Screen Width & Current Tab Location
  useEffect(() => {
    window.addEventListener("resize", watchScreenSize);
    emitter.on("screen-width-data", (data) => {
      if (screenWidth !== data.width) {
        setScreenWidth(data.width);
      }
    });
    return () => {
      window.removeEventListener("resize", watchScreenSize);
    };
  }, [screenWidth, setScreenWidth]);

  function updateURL(newURL) {
    if (window.history && window.history.pushState) {
      if (newURL === "/home") {
        window.history.pushState({}, "", "/");
      } else {
        window.history.pushState({}, "", newURL);
      }
    }
  }

  useEffect(() => {
    const elsToWatch = document.querySelectorAll(".section-block");
    if (elsToWatch) {
      elsToWatch.forEach((block) => {
        observer.observe(block);
      });
      emitter.on("current-scroll-index", (data) => {
        updateURL(`/${lowerCaseSectionsArr[data]}`);
        setActiveTab(data);
      });
    }
  }, [lowerCaseSectionsArr, setActiveTab]);

  return (
    <div className="App">
      <Header
        handleMenuNavigation={(activeTab) => {
          setActiveTab(activeTab);
        }}
        activeTab={activeTab}
      />
      <MainContainer
        currentThemeMode={themeMode}
        handleContactNav={(activeTab) => {
          setActiveTab(activeTab);
        }}
      >
        <Home
          key={0}
          handleContactNav={(activeTab) => { 
            setActiveTab(activeTab);
          }}
        />
        <About key={1} />
        <Skill key={3} />
        <Project key={2} />
        <Resume key={4} />
        <Contact key={5} />
      </MainContainer>
    </div>
  );
}
