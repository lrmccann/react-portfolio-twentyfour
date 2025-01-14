import { useContext, useState } from "react";
import { GlobalContext } from "../Assets/utilities";
import {
    frontEndTechArr,
    backEndTechArr,
    toolsArr
  } from "../Assets/utilities";
  import AnimatedRow from "../Components/AnimatedRow";
  import Modal from "../Components/Modal";



const Skill = (props) => {

    const {sectionName, currentThemeMode} = props;
    const { userDevice } = useContext(GlobalContext);
    const [activeArr, setActiveArr] = useState([]);
    const [activeHeader, setActiveHeader] = useState();
    const [skillModalOpen, setSkillModalOpen] = useState(false);

    const mainContainerEl = document.getElementById("main-page");

    const iconSections = [
        { "Front-End Tech": frontEndTechArr },
        { "Back-End Tech": backEndTechArr },
        { "Additional Tech": toolsArr },
      ];

      const openSkillModal = (arr, header) => {
        if (arr && arr.length !== 0 && header) {
          setActiveArr(arr);
          setActiveHeader(header);
          setSkillModalOpen(true);
          mainContainerEl.classList.add("modal-open");
        } else {
          setSkillModalOpen(false);
          mainContainerEl.classList.remove("modal-open");
        }
      };

    return(
        <div
        id={sectionName}
        className="section-block flex flex-col items-center justify-evenly"
      >
        {iconSections.map((obj, i) => {
          const heading = Object.keys(obj)[0];
          return userDevice === "mobile" ? (
            <div
              className="mobile-icon-container flex flex-col justify-evenly"
              key={i}
            >
              <h1
                id={`skill-header-${i}`}
                className="mobile-skills-header text-custom-text"
                onClick={() => {
                  openSkillModal(obj[heading], heading);
                }}
              >
                {heading} &#8250;
                {/* <div className="line"></div> */}
              </h1>
              <div className="mobile-icon-row scroller" id={`scroller-${i}`}>
                <AnimatedRow
                  key={i}
                  eachArr={obj[heading]}
                  currentThemeMode={currentThemeMode}
                />
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-custom-text">Full screen skill section</h1>
            </div>
          );
        })}
        {skillModalOpen && userDevice === "mobile" && (
          <Modal
            arr={activeArr}
            activeHeader={activeHeader}
            modalStatus={openSkillModal}
            modalType="skill"
          />
        )}
      </div>
    )
}

export default Skill;