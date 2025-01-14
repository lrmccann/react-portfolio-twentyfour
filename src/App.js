import Header from "./Components/Header";
import watchScreenSize from "./Assets/Utilities/width-observer";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "./Assets/Utilities/ThemeContext";
import { observer} from "./Assets/utilities";
import emitter from "./Assets/Utilities/event-bus";
import MainContainer from "./Pages/MainContainer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Skill from "./Pages/Skill";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

export default function App() {
  const { screenWidth, setScreenWidth, themeMode, lowerCaseSectionsArr} = useContext(GlobalContext);
  const [tabLocation, setTabLocation] = useState(0);
  const [currentThemeMode, setCurrentThemeMode] = useState(themeMode);

const themeChanged = () => {
  currentThemeMode === "light" ? setCurrentThemeMode("dark") : setCurrentThemeMode("light");
}

// set localstorage object's theme attribute to user preference after detecting browser pref in context
useEffect(() => {
  currentThemeMode === "light" ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
}, [currentThemeMode])

// Watch Screen Width & Current Tab Location
useEffect(() => {
  window.addEventListener("resize", watchScreenSize);
  emitter.on("screen-width-data", (data) => {
        if(screenWidth !== data.width){
          setScreenWidth(data.width);
        }
      });
    const elsToWatch = document.querySelectorAll(".section-block");
    if(elsToWatch){
      elsToWatch.forEach((block) => {
            observer.observe(block);
          });
        emitter.on("current-scroll-index", (data) => {
          updateURL(`/${lowerCaseSectionsArr[data]}`);
          setTabLocation(data);
        })
    }
    return () => {
      window.removeEventListener("resize", watchScreenSize);
    }
}, [lowerCaseSectionsArr, screenWidth, setScreenWidth, tabLocation])

function updateURL(newURL) {
  if (window.history && window.history.pushState) {
    if(newURL === "/home"){
      window.history.pushState({}, '', "/");
    }else {
      window.history.pushState({}, '', newURL);
    }
  }
}
  return (
      <div className="App">
        <Header
        tabLocation={tabLocation}
        currentThemeMode={currentThemeMode}
        themeChanged={themeChanged}
        handleMenuNavigation={(activeTab) => {setTabLocation(activeTab)}}
        />
        <MainContainer
          tabLocation={tabLocation}
          currentThemeMode={currentThemeMode}
          handleContactNav={(activeTab) => {setTabLocation(activeTab)}}
        >
          <Home key={0} />
          <About key={1} />
          <Project key={2} />
          <Skill key={3} />
          <Resume key={4} />
          <Contact key={5} />
        </MainContainer>
      </div>
  );
}
