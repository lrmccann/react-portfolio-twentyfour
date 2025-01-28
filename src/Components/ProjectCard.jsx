import Image from "./Atoms/Image";

const ProjectCard = (props) => {
  const { projClass, uniqueKey, currentProject, cb } = props;

  return (
    <div
      key={`proj-card-${uniqueKey}`}
      id={`proj-${currentProject.id}`}
      className={`project-card ${projClass}`}
    >
      <Image
        className="proj-image"
        aspectRatio={1 / 1.25}
        width="100%"
        height="50%"
        imageSrc={currentProject.siteThumbnail}
        altText="idk"
      />
      <h1 className="text-custom-text">{currentProject.siteName}</h1>
      <p className="text-custom-text">{currentProject.description}</p>
      {/* <button
        onClick={(e) => {
          e.preventDefault();
          cb(currentProject);
        }}
        id={`button-${currentProject.id}`}
      ></button> */}
      <div className="card-button-container">
        <button 
        // id="proj-learn-more" 
                onClick={(e) => {
                  e.preventDefault();
                  cb(currentProject);
                }}
                id={`button-${currentProject.id}`}
                style={{borderTop: "solid oldlace 0.5px"}}
        className="text-custom-text"
        >
          Learn More
        </button>
        <button
          id="proj-visit-site"
          className="bg-custom-primary-background text-custom-text"
        >
          Visit Site
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
