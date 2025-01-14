import { resumeText } from "../Assets/utilities";
import { globalIcons, myResumePDF } from "../Assets/utilities";



const Resume = (props) => {

const {sectionName, userDevice} = props;    
    
    return(
        <div
        id={sectionName}
        className="section-block flex flex-col justify-evenly"
      >
        {resumeText.map((resumeSection, i) => {
          return (
            <div
              id={
                userDevice !== "mobile"
                  ? "resume-container"
                  : "mobile-resume-container"
              }
              key={i}
            >
              <h1 className="text-custom-text">{resumeSection.title}</h1>
              <h2 className="text-custom-text">{resumeSection.organization}</h2>
              <ul className="text-custom-text">
                <li>{resumeSection.responsibilities[0]}</li>
                <li>{resumeSection.responsibilities[1]}</li>
                {userDevice !== "mobile" && (
                  <li>{resumeSection.responsibilities[2]}</li>
                )}
                {userDevice !== "mobile" && (
                  <li>{resumeSection.responsibilities[3]}</li>
                )}
              </ul>
            </div>
          );
        })}
        <div className="contact-btn-cont flex flex-col items-center justify-evenly">
          <button
            id="contact-chat-button"
            className="contact-button bg-custom-button-bg-primary"
          >
            <a
              href={myResumePDF}
              download={myResumePDF}
              className="text-custom-text"
            >
              Download Full Resume
            </a>
          </button>
        </div>
      </div>
    )
}


export default Resume;