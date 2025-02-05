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
import Modal from "./Components/Modal";
import Footer from "./Components/Footer";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export default function App() {
  const {
    screenWidth,
    themeMode,
    lowerCaseSectionsArr,
    currentTab,
    userDevice,
  } = useContext(GlobalContext);
  const [activeTab, setActiveTab] = useState(currentTab);
  const [currentScreenWidth, setCurrentScreenWidth] = useState(screenWidth);
  const [activeProject, setActiveProject] = useState({});

  const location = useLocation();
  const navigate = useNavigate();

  const router = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/skills",
      element: <Skill />,
    },
    {
      path: "/experience",
      element: <Resume />,
    },
    {
      path: "/project",
      element: <Project />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ];

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
    if (
      window.history &&
      window.history.pushState &&
      currentScreenWidth <= 1024 &&
      (userDevice === "tablet" || userDevice === "mobile")
    ) {
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
    if (
      currentScreenWidth <= 1024 &&
      (userDevice === "tablet" || userDevice === "mobile")
    ) {
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

  const isModalOpen = location.pathname.includes("/projects/");

  return (
    <div className="App">
      {activeTab === 0 && (
        <Header
          handleMenuNavigation={(activeTab) => {
            setActiveTab(activeTab);
          }}
          activeTab={activeTab}
        />
      )}
      {/* {currentScreenWidth >= 820 && (userDevice === 'tablet' || userDevice === 'mobile') ? ( */}
      {currentScreenWidth <= 1024 &&
      (userDevice === "tablet" || userDevice === "mobile") ? (
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
          />
          <Contact key={5} currentScreenWidth={currentScreenWidth} />
          {activeTab !== 0 && (
            <Footer
              handleMenuNavigation={(activeTab) => {
                setActiveTab(activeTab);
              }}
              activeTab={activeTab}
            />
          )}
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
              path="about"
              element={
                <About key={1} currentScreenWidth={currentScreenWidth} />
              }
            />
            <Route
              path="skills"
              element={
                <Skill key={2} currentScreenWidth={currentScreenWidth} />
              }
            />
            <Route
              path="resume"
              element={
                <Resume key={4} currentScreenWidth={currentScreenWidth} />
              }
            />
            <Route
              path="projects"
              element={
                <Project
                  key={3}
                  currentScreenWidth={currentScreenWidth}
                  setProject={(project) => {
                    setActiveProject(project);
                  }}
                />
              }
            />
            <Route
              path="contact"
              element={
                <Contact key={5} currentScreenWidth={currentScreenWidth} />
              }
            />
          </Routes>
          {isModalOpen &&
            Object.keys(activeProject).length !== 0 &&
            activeProject !== undefined && (
              <Modal
                projObj={activeProject}
                modalType="project"
                modalStatus={true}
                currentScreenWidth={currentScreenWidth}
                onClose={() => navigate(-1)}
              >
                <Routes>
                  <Route
                    path={`/projects/${activeProject.siteName
                      .replace(/\s+/g, "-")
                      .toLowerCase()}`}
                    element={<Modal />}
                  />
                </Routes>
              </Modal>
            )}
        </MainContainer>
      )}
    </div>
  );
}
