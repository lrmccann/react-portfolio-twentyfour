import Buttonn from "../../Components/Atoms/Buttonn";




const ResumeMobile = ({resumeText, currentScreenWidth, download}) => {



    return(
        <div className="resume-container flex flex-col justify-between">
        {resumeText.map((resumeSection, i) => {
          return (
            <>
              <h3 className="text-custom-text">{resumeSection.title}</h3>
              <h4 className="text-custom-text">
                <i>{resumeSection.organization}</i>
              </h4>
              <ul className="text-custom-text">
                <li>{resumeSection.responsibilities[0]}</li>
                <li>{resumeSection.responsibilities[1]}</li>
                {currentScreenWidth >= 820 && (
                  <li>{resumeSection.responsibilities[2]}</li>
                )}
                {currentScreenWidth >= 820 && (
                  <li>{resumeSection.responsibilities[3]}</li>
                )}
              </ul>
              </>
          );
        })}
        <div id="resume-btn-container" className="flex flex-col justify-center">
          <Buttonn
            id={"resume-download"}
            className="bg-custom-button-bg-primary text-custom-text outline outline-1 outline-custom-primary-outline"
            height={75}
            width={100}
            textContent={"Download Full Resume"}
            action={download}
            type={"tab"}
            borderRadius={"0.5em"}
            ariaLabel={"Select Additional Tool Tab"}
          />
        </div>
        </div>
    )
}

export default ResumeMobile;