import { useContext, useState, useEffect } from "react";
import { resumeText } from "../Assets/utilities";
import { GlobalContext } from "../Assets/utilities";
import Button from "../Components/Atoms/Button";
import Buttonn from "../Components/Atoms/Buttonn";

const Resume = ({ currentScreenWidth }) => {
  // const {userDevice} = props;
  const { userDevice } = useContext(GlobalContext);

  // pass to button comp to download resume without HTML attr
  function download() {
    import("../Assets/PDFs/Logan-McCann-2024-Resume.pdf")
      .then((module) => {
        const a = document.createElement("a");
        a.href = module.default;
        a.download = module.default.split("/").pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => console.error("Error importing module:", error));
  }
  return (
    <div
      id="experience"
      className="section-block"
    >
      <div className="resume-container flex flex-col justify-between">
        <h1 className="resume-title text-custom-text">Resume</h1>
      {resumeText.map((resumeSection, i) => {
        return (
          <div
            id="resume-section"
            className="flex flex-col"
            key={i}
          >
            <h1 className="text-custom-text">{resumeSection.title}</h1>
            <h2 className="text-custom-text">
              <i>{resumeSection.organization}</i>
            </h2>
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
    </div>
  );
};

export default Resume;
