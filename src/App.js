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
import Footer from "./Components/Footer";
export default function App() {
  const {
    screenWidth,
    themeMode,
    lowerCaseSectionsArr,
    currentTab,
    userDevice,
  } = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState(0);
  const [currentScreenWidth, setCurrentScreenWidth] = useState(screenWidth);
  const [activeProject, setActiveProject] = useState({});

  // set localstorage object's theme attribute to user preference after detecting browser pref in context
  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [themeMode]);

  // Watch Screen Width & Current Tab Location
  useEffect(() => {
    window.addEventListener("resize", watchScreenSize);
    emitter.on("screen-width-data", (data) => {
      if (currentScreenWidth !== data.width) {
        setCurrentScreenWidth(data.width);
      }
    });
    return () => {
      window.removeEventListener("resize", watchScreenSize);
    };
  }, [currentScreenWidth]);

  function updateURL(newURL) {
    if (window.history && window.history.pushState) {
      if (newURL === "/home") {
        window.history.pushState({}, "", "/");
      } else if (
        newURL !== "/home" &&
        newURL.includes("/projects/") === false
      ) {
        window.history.pushState({}, "", newURL);
      } else if (newURL !== "/home" && newURL.includes("/projects/") === true) {
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
      // const initialTab = lowerCaseSectionsArr.indexOf(currentTab);
      // if(initialTab !== -1) setActiveTab(initialTab);
      emitter.on("current-scroll-index", (data) => {
        updateURL(`/${lowerCaseSectionsArr[data]}`);
        setActiveTab(data);
      });
      const initialTab = lowerCaseSectionsArr.indexOf(currentTab);
      if(initialTab !== -1) setActiveTab(initialTab);
    }
  }, [lowerCaseSectionsArr, currentTab, currentScreenWidth]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("activeProject");
      localStorage.setItem("activeProject", JSON.stringify(activeProject));
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [activeProject]);

  useEffect(() => {
    const storedProject = localStorage.getItem("activeProject");
    if (storedProject !== null && Object.keys(activeProject).length === 0) {
      setActiveProject(JSON.parse(storedProject));
    }
  }, []);

  // 
  return (
    <div className="App">
      {/* {activeTab === 0 && (userDevice === 'tablet' || userDevice === 'mobile') &&  ( */}
      {(userDevice === 'mobile' || userDevice === 'tablet') && activeTab === 0 ?
      (
        <Header
        handleMenuNavigation={(activeTab) => {
          setActiveTab(activeTab);
        }}
        activeTab={activeTab}
      />
      ) : userDevice === 'desktop' ? (
        <Header
        handleMenuNavigation={(activeTab) => {
          setActiveTab(activeTab);
        }}
        activeTab={activeTab}
      />
      ) : null
      }
      {/* {(userDevice === 'desktop') || (userDevice !== 'desktop' && activeTab === 0)  && (
        
        <Header
          handleMenuNavigation={(activeTab) => {
            setActiveTab(activeTab);
          }}
          activeTab={activeTab}
        />
       )} */}
      <MainContainer currentScreenWidth={currentScreenWidth}>
        <Home
          key={0}
          currentScreenWidth={currentScreenWidth}
          currentThemeMode={themeMode}
        />
        <About
          handleContactNav={(activeTab) => {
            setActiveTab(activeTab);
          }}
          key={1}
          currentScreenWidth={currentScreenWidth}
        />
        <Skill key={2} currentScreenWidth={currentScreenWidth} />
        <Resume key={3} currentScreenWidth={currentScreenWidth} />
        <Project
          key={4}
          mobileProjectSelected={updateURL}
          currentScreenWidth={currentScreenWidth}
          activeTab={activeTab}
        />
        <Contact key={5} currentScreenWidth={currentScreenWidth} />
        {activeTab !== 0 && userDevice !== 'desktop' && (
          <Footer
            handleMenuNavigation={(activeTab) => {
              setActiveTab(activeTab);
            }}
            activeTab={activeTab}
          />
        )}
      </MainContainer>
    </div>
  );
}
