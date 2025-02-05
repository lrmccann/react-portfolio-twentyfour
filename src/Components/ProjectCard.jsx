import Image from "./Atoms/Image";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Assets/utilities.js";
import Buttonn from "../Components/Atoms/Buttonn";

const ProjectCard = (props) => {
  const { projClass, uniqueKey, currentProject, cb, currentScreenWidth } = props;
  const {themeMode} = useContext(GlobalContext);

  return (
    <div
      key={`proj-card-${uniqueKey}`}
      id={`proj-${currentProject.id}`}
      style={{border: themeMode === "light" ? "solid black 1px" : "solid oldlace 1px"}}
      className={`project-card flex flex-col justify-start ${projClass} ${themeMode === "bg-custom-secondary-background" ? "" : ""}`}
    >
      <Image
        className="proj-image"
        aspectRatio={1 / 1.25}
        width="100%"
        height="50%"
        // imageSrc={currentProject.siteThumbnail}
        imageSrc={currentScreenWidth >= 820 ? currentProject.siteMedium : currentProject.siteThumbnail}
        altText="idk"
      />
      <span>
      <h2 className="text-custom-text">{currentProject.siteName}</h2>
      <p className="text-custom-text">{currentProject.description}</p>
      </span>
      <div className="card-button-container"
      style={{borderTop: themeMode === "light" ? "solid black 1px" : "solid oldlace 1px"}}
      >
      <Buttonn 
              id={`open-project-btn-${currentProject.id}`}
              className='text-custom-text'
              height={100}
              width={50}
              textContent={"Learn More"}
              action={() => {cb(currentProject)}}
              type={"button"}
              borderRadius={'0 0 0 1em'}
              ariaLabel={"Select Additional Tool Tab"}
            />
            <Buttonn 
              id={`visit-site-btn-${currentProject.id}`}
              className='bg-custom-button-bg-primary text-custom-text'
              height={100}
              width={50}
              textContent={"Visit Site"}
              action={() => {window.open(currentProject.siteUrl, '_blank')}}
              type={"button"}
              borderRadius={'0 0 1em 0'}
              ariaLabel={"Select Additional Tool Tab"}
            />
      </div>
    </div>
  );
};

export default ProjectCard;
