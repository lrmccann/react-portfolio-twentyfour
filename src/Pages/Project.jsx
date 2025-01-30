import { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../Assets/utilities";
import Modal from "../Components/Modal";
import { projectArr, navigationIcons } from "../Assets/utilities";
import ProjectCard from "../Components/ProjectCard";
import { useNavigate } from "react-router-dom";

const Project = ({ currentScreenWidth, setProject, mobileProjectSelected }) => {
  const { userDevice } = useContext(GlobalContext);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState({});
  const [mobileHomeActive, setMobileHomeActive] = useState();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const [buttonId, setButtonId] = useState("");
  const prevScrollX = useRef(0);
  let scrollTimeout;

  const mainContainerEl = document.getElementById("main-page");

  const navigate = useNavigate();

  const openProjectModal = (projectObj) => {
    if (projectObj === null) {
      setProjectModalOpen(false);
      // document.getElementById("-1").style.display = "block";
      // document.getElementById("+1").style.display = "block";
      navigate("/projects");
      mainContainerEl.classList.remove("modal-open");
    } else {
      if (Object.keys(projectObj)) {
        if (currentScreenWidth >= 1025) {
          setProject(projectObj);
          navigate(
            `/projects/${projectObj.siteName
              .replace(/\s+/g, "-")
              .toLowerCase()}`
          );
        } else {
          // document.getElementById("-1").style.display = "none";
          // document.getElementById("+1").style.display = "none";
          setActiveProject(projectObj);
          mobileProjectSelected(
            `/projects/${projectObj.siteName
              .replace(/\s+/g, "-")
              .toLowerCase()}`
          );
          setProjectModalOpen(true);
          mainContainerEl.classList.add("modal-open");
        }
      }
    }
  };

  useEffect(() => {
    if (currentScreenWidth <= 1025) {
      setMobileHomeActive("mobile-section");
    } else {
      setMobileHomeActive("");
    }
  }, [currentScreenWidth]);

  // Update selectedProjectIndex based on scroll position
  const handleScroll = () => {
    const currentScrollX = document.getElementById("slider").scrollLeft;
    const projectWidth = document.querySelector(".slide")?.clientWidth || 0;
    const newSelectedProjectIndex = Math.round(currentScrollX / projectWidth);

    if (newSelectedProjectIndex !== selectedProjectIndex) {
      setSelectedProjectIndex(newSelectedProjectIndex);
      // Update active dot based on new selectedProjectIndex
      document.getElementById(`dot-${selectedProjectIndex}`).classList.remove("dot-active");
      document.getElementById(`dot-${newSelectedProjectIndex}`).classList.add("dot-active");
    }

    prevScrollX.current = currentScrollX;
  };

  const changeSlide = (buttonId) => {
    setButtonId(buttonId);
    const newSelectedProjectIndex = buttonId === "-1" ? selectedProjectIndex - 1 : selectedProjectIndex + 1;
  
    if (newSelectedProjectIndex >= 0 && newSelectedProjectIndex < projectArr.length) {
      setSelectedProjectIndex(newSelectedProjectIndex);
  
      // Smoothly scroll to the new project
      const slider = document.querySelector(".slider");
      const projectCards = slider.querySelectorAll(".slide");
      if (projectCards[newSelectedProjectIndex]) { 
        projectCards[newSelectedProjectIndex].scrollIntoView({ behavior: 'smooth' }); 
      }
  
      // Update active dot
      document.getElementById(`dot-${selectedProjectIndex}`).classList.remove("dot-active");
      document.getElementById(`dot-${newSelectedProjectIndex}`).classList.add("dot-active"); 
    } else { 
      if(selectedProjectIndex === 7 ){
        const slider = document.querySelector(".slider");
        const projectCards = slider.querySelectorAll(".slide");
        setSelectedProjectIndex(0);
        projectCards[0].scrollIntoView({ behavior: 'smooth' }); 
      }else if(selectedProjectIndex === 0 && newSelectedProjectIndex < selectedProjectIndex){
        const slider = document.querySelector(".slider");
        const projectCards = slider.querySelectorAll(".slide");
        setSelectedProjectIndex(7);
        projectCards[7].scrollIntoView({ behavior: 'smooth' }); 
      }
      // Handle edge cases (e.g., loop back to the beginning)
    }
  };

  // Update active dot on initial render and when selectedProjectIndex changes
  useEffect(() => {
    document.getElementById(`dot-${selectedProjectIndex}`).classList.add("dot-active");

    return () => {
      // Cleanup function to remove active class from previous dot on unmount
      document.getElementById(`dot-${selectedProjectIndex}`).classList.remove("dot-active");
    };
  }, [selectedProjectIndex]);

  return (
    <div
      id="projects"
      className={`section-block  ${mobileHomeActive} flex flex-col justify-top`}
    >
      <h1 className="slider-title text-custom-text">Previous Work</h1>
      <div className="project-card-container slider-container flex flex-col items-center justify-evenly">
        <div
          id="slider"
          className="slider"
          onScroll={(e) => {
            e.preventDefault();
            handleScroll(e);
          }}
        >
          {projectArr.map((project, i) => {
            return userDevice === "mobile" ? (
              <>
                <ProjectCard
                  key={i}
                  cb={openProjectModal}
                  projClass="slide"
                  dataIndex={i}
                  currentProject={project}
                />
              </>
            ) : (
              <div>
                <h1 className="text-custom-text">not mobile</h1>
              </div>
            );
          })}
        </div>
        {/* <button
          id="-1"
          onClick={(e) => changeSlide(e.target.id)}
          className="prev"
          style={{backgroundImage: `url(${navigationIcons.projectNavigationLeftDarkTheme})`}}
        >
        </button>
        <button
          id="+1"
          onClick={(e) => changeSlide(e.target.id)}
          className="next"
          style={{backgroundImage: `url(${navigationIcons.projectNavigationRightDarkTheme})`}}
        >
        </button> */}
        <div class="dots-container">
          <span class="dot" id="dot-0" data-index="0"></span>
          <span class="dot" id="dot-1" data-index="1"></span>
          <span class="dot" id="dot-2" data-index="2"></span>
          <span class="dot" id="dot-3" data-index="3"></span>
          <span class="dot" id="dot-4" data-index="4"></span>
          <span class="dot" id="dot-5" data-index="5"></span>
          <span class="dot" id="dot-6" data-index="6"></span>
          <span class="dot" id="dot-7" data-index="7"></span>
        </div>
      </div>
      {projectModalOpen && currentScreenWidth <= 1025 && (
        <Modal
          projObj={activeProject}
          currentScreenWidth={currentScreenWidth}
          modalStatus={openProjectModal}
          modalType="project"
        />
      )}
    </div>
  );
};

export default Project;
