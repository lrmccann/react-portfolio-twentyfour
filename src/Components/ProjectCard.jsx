import { useEffect, useState } from "react";

const ProjectCard = (props) => {
  const [mainTechIcon, setMainTechIcon] = useState("");
  const [activeColor, setActiveColor] = useState();

  const { currentProject, cb } = props;

  useEffect(() => {
    const colorArr = [
      "black",
      "blue",
      "green",
      "yellow",
      "red",
      "orange",
      "gray",
      "purple",
    ];
    setActiveColor(colorArr[currentProject.id]);
    setMainTechIcon(currentProject.techIcon);
  }, [currentProject]);

  return (
    <div
      className={`project-card-default outline outline-custom-primary-outline outline-2 flex flex-col justify-start ${activeColor}`}
      id={`proj-${currentProject.id}`}
    >
      <button
        onClick={() => {
          cb(currentProject);
        }}
        id={`button-${currentProject.id}`}
      ></button>
      <h1 className="text-custom-text">{currentProject.siteName}</h1>
      <p className="text-custom-text">{currentProject.description}</p>
      <div>
        <img src={mainTechIcon} alt="" />
      </div>
    </div>
  );
};

export default ProjectCard;
