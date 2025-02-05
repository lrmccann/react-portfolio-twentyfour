import { useContext, useState, useEffect } from "react";
import { resumeText } from "../Assets/utilities";
import { GlobalContext } from "../Assets/utilities";
import Button from "../Components/Atoms/Button";
import Buttonn from "../Components/Atoms/Buttonn";

const Resume = ({ currentScreenWidth }) => {
  // const {userDevice} = props;
  const { userDevice } = useContext(GlobalContext);
  const [mobileHomeActive, setMobileHomeActive] = useState();
  useEffect(() => {
    if (currentScreenWidth <= 1024 || (userDevice === 'tablet' || userDevice === 'mobile')) {
      setMobileHomeActive("mobile-section");
    } else {
      setMobileHomeActive("");
    }
  }, [currentScreenWidth, userDevice]);

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
      className={`section-block ${mobileHomeActive} `}
    >
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
    </div>
  );
};

export default Resume;
