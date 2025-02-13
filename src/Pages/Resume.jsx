import { useContext, useState, useEffect } from "react";
import { resumeText } from "../Assets/utilities";
import { GlobalContext } from "../Assets/utilities";
import Buttonn from "../Components/Atoms/Buttonn";
import ResumeMobile from "./ResumeLayouts/ResumeMobile";
import ResumeDesktop from "./ResumeLayouts/ResumeDesktop";

const Resume = ({ currentScreenWidth }) => {
  // const {userDevice} = props;
  const { userDevice } = useContext(GlobalContext);
  const [mobileHomeActive, setMobileHomeActive] = useState();
  const [resumeLayout, setResumeLayout] = useState();

  useEffect(() => {
    if (currentScreenWidth <= 1024 && (userDevice === 'tablet' || userDevice === 'mobile')) {
      setMobileHomeActive("mobile-section");
      setResumeLayout(<ResumeMobile resumeText={resumeText} currentScreenWidth={currentScreenWidth} download={download} />);
    } else {
      setMobileHomeActive("full-section");
      setResumeLayout(<ResumeDesktop download={download} currentScreenWidth={currentScreenWidth}  />);
    }
  }, [currentScreenWidth, userDevice]);

  // pass to button comp to download resume without HTML attr
  function download() {
    // import("../Assets/PDFs/Logan-McCann-2024-Resume.pdf")
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
      {resumeLayout}

    </div>
  );
};

export default Resume;
