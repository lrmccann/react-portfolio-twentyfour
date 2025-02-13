import { useContext } from "react";
import { GlobalContext } from "../../Assets/utilities";
import ProjectCard from "../../Components/ProjectCard";
import { projectArr } from "../../Assets/utilities";







const ProjectMobile = ({currentScreenWidth, handleScroll, openProjectModal}) => {
  const { userDevice } = useContext(GlobalContext);

    return(
        <div className="project-card-container slider-container flex flex-col justify-around ">
        <h1 className="slider-title text-custom-text">Previous Work</h1>
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
                    currentScreenWidth={currentScreenWidth}
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
    )
}

export default ProjectMobile;