import { useContext, useState, useEffect, useRef } from "react";
import { GlobalContext } from "../Assets/utilities";
import Modal from "../Components/Modal";
import { projectArr, navigationIcons } from "../Assets/utilities";
import ProjectCard from "../Components/ProjectCard";
import { useNavigate } from "react-router-dom";
import ProjectMobile from "./ProjectLayouts/ProjectMobile";
import ProjectDesktop from "./ProjectLayouts/ProjectDesktop";

const Project = ({ currentScreenWidth, setProject, mobileProjectSelected, activeTab }) => {
  const { userDevice } = useContext(GlobalContext);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [activeProject, setActiveProject] = useState({});
  const [mobileHomeActive, setMobileHomeActive] = useState();
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const prevScrollX = useRef(0);
  const [projectLayout, setProjectLayout] = useState();

  const mainContainerEl = document.getElementById("main-page");

  const navigate = useNavigate();

  const openProjectModal = (projectObj) => {
    if (projectObj === null) {
      setProjectModalOpen(false);
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

  useEffect(() => {
    if (currentScreenWidth <= 1024 && (userDevice === 'tablet' || userDevice === 'mobile')) {
      setMobileHomeActive("mobile-section");
      setProjectLayout(<ProjectMobile handleScroll={handleScroll} currentScreenWidth={currentScreenWidth} openProjectModal={openProjectModal} />);
    } else {
      setMobileHomeActive("full-section");
      setProjectLayout(<ProjectDesktop activeTab={activeTab} />);
    }
    console.log(activeTab, "the active tab")
  }, [currentScreenWidth, userDevice, activeTab]);

  const changeSlide = (buttonId) => {
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
  // useEffect(() => {
  //   document.getElementById(`dot-${selectedProjectIndex}`).classList.add("dot-active");
  //   return () => {
  //     // Cleanup function to remove active class from previous dot on unmount
  //     document.getElementById(`dot-${selectedProjectIndex}`).classList.remove("dot-active");
  //   };
  // }, [selectedProjectIndex]);



// function isElementInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

  return (
    <div
      id="projects"
      className={`section-block  ${mobileHomeActive} flex flex-col sm:justify-top`}
    >
        {projectLayout}
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
