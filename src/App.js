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
import { Routes, Route } from "react-router-dom";

export default function App() {
  const { screenWidth, themeMode, lowerCaseSectionsArr, currentTab } =
    useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState(currentTab);
  const [currentScreenWidth, setCurrentScreenWidth] = useState(screenWidth);

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
    // console.log(currentScreenWidth, "current screen width")
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
    // activeTab === 0 ? window.history.pushState({}, "", "/");
    if (window.history && window.history.pushState) {
      if (newURL === "/home") {
        window.history.pushState({}, "", "/");
      } else {
        window.history.pushState({}, "", newURL);
      }
    }
  }

  useEffect(() => {
    if (currentScreenWidth <= 1025) {
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
    }
  }, [lowerCaseSectionsArr, setActiveTab, currentScreenWidth]);

  return (
    <div className="App">
      <Header
        handleMenuNavigation={(activeTab) => {
          setActiveTab(activeTab);
        }}
        activeTab={activeTab}
      />

      {currentScreenWidth <= 1025 ? (
        <MainContainer currentScreenWidth={currentScreenWidth}>
          <Home
            key={0}
            handleContactNav={(activeTab) => {
              setActiveTab(activeTab);
            }}
            currentScreenWidth={currentScreenWidth}
          />
          <About key={1} currentScreenWidth={currentScreenWidth} />
          <Skill key={2} currentScreenWidth={currentScreenWidth} />
          <Project key={3} currentScreenWidth={currentScreenWidth} />
          <Resume key={4} currentScreenWidth={currentScreenWidth} />
          <Contact key={5} currentScreenWidth={currentScreenWidth} />
        </MainContainer>
      ) : (
        <MainContainer>
          <Routes>
            <Route
              path="/"
              index
              element={
                <Home
                  key={0}
                  currentThemeMode={themeMode}
                  handleContactNav={(activeTab) => {
                    setActiveTab(activeTab);
                  }}
                  currentScreenWidth={currentScreenWidth}
                />
              }
            />
            <Route
              path="/about"
              element={
                <About key={1} currentScreenWidth={currentScreenWidth} />
              }
            />
            <Route
              path="/skills"
              element={
                <Skill key={2} currentScreenWidth={currentScreenWidth} />
              }
            />
            <Route
              path="/projects"
              element={
                <Project key={3} currentScreenWidth={currentScreenWidth} />
              }
            />
            <Route
              path="/resume"
              element={
                <Resume key={4} currentScreenWidth={currentScreenWidth} />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact key={5} currentScreenWidth={currentScreenWidth} />
              }
            />
          </Routes>
        </MainContainer>
      )}
    </div>
  );
}
