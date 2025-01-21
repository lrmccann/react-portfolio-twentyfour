import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../Assets/utilities";
import Modal from "../Components/Modal";
import { projectArr } from "../Assets/utilities";
import ProjectCard from "../Components/ProjectCard";

const Project = ({currentScreenWidth}) => {

    const { userDevice } = useContext(GlobalContext);
    const [projectModalOpen, setProjectModalOpen] = useState(false);
    const [activeProject, setActiveProject] = useState({});
    const [mobileHomeActive, setMobileHomeActive] = useState();

    const mainContainerEl = document.getElementById("main-page");

    
      const openProjectModal = (projectObj) => {
        if (projectObj === null) {
          setProjectModalOpen(false);
          mainContainerEl.classList.remove("modal-open");
        } else {
          if (Object.keys(projectObj)) {
            setActiveProject(projectObj);
            setProjectModalOpen(true);
            mainContainerEl.classList.add("modal-open");
          }
        }
      };

      useEffect(() => {
        if(currentScreenWidth <= 1025){
          setMobileHomeActive("mobile-section");
        }else{
          setMobileHomeActive("");
        }
      }, [currentScreenWidth])


    return(
        <div
        id="projects"
        className={`section-block ${mobileHomeActive} flex flex-row flex-wrap justify-around`}
      >
        {projectArr.map((project, i) => {
          return userDevice === "mobile" ? (
            <ProjectCard
              key={i}
              currentProject={project}
              currentI={i}
              cb={openProjectModal}
            />
          ) : (
            <div>
              <h1 className="text-custom-text">not mobile</h1>
            </div>
          );
        })}
        {projectModalOpen && userDevice === "mobile" && (
          <Modal

            projObj={activeProject}
            currentScreenWidth={currentScreenWidth}
            // activeHeader={activeHeader}
            modalStatus={openProjectModal}
            modalType="project"
          />
        )}
      </div>
    )
}

export default Project;