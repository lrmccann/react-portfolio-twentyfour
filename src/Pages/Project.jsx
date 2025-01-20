import { useContext, useState } from "react";
import { GlobalContext } from "../Assets/utilities";
import Modal from "../Components/Modal";
import { projectArr } from "../Assets/utilities";
import ProjectCard from "../Components/ProjectCard";

const Project = (props) => {

    const {sectionName} = props;
    const { userDevice } = useContext(GlobalContext);
    // const [activeArr, setActiveArr] = useState([]);
    const [projectModalOpen, setProjectModalOpen] = useState(false);
    const [activeHeader, setActiveHeader] = useState();
    const [activeProject, setActiveProject] = useState({});
    const [skillModalOpen, setSkillModalOpen] = useState(false);
    const mainContainerEl = document.getElementById("main-page");


    const openSkillModal = (arr, header) => {
        if (arr && arr.length !== 0 && header) {
        //   setActiveArr(arr);
          setActiveHeader(header);
          setSkillModalOpen(true);
          mainContainerEl.classList.add("modal-open");
        } else {
          setSkillModalOpen(false);
          mainContainerEl.classList.remove("modal-open");
        }
      };
    
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


    return(
        <div
        id="projects"
        className="section-block flex flex-row flex-wrap justify-around"
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
            activeHeader={activeHeader}
            modalStatus={openProjectModal}
            modalType="project"
          />
        )}
      </div>
    )
}

export default Project;