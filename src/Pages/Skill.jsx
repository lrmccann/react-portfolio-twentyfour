import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Assets/utilities";
import { frontEndTechArr, backEndTechArr, toolsArr } from "../Assets/utilities";
import AnimatedRow from "../Components/Organisms/AnimatedRow";
import ProgressBar from "../Components/Atoms/ProgressBar";
import Modal from "../Components/Modal";
import { animateProjectRows } from "../Assets/utilities";
import Buttonn from "../Components/Atoms/Buttonn";

const Skill = ({ currentScreenWidth }) => {
  const { userDevice } = useContext(GlobalContext);
  const [activeArr, setActiveArr] = useState([]);
  const [activeHeader, setActiveHeader] = useState();
  const [skillModalOpen, setSkillModalOpen] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [mobileHomeActive, setMobileHomeActive] = useState();
  const mainContainerEl = document.getElementById("main-page");
  const [activeSkillSection, setActiveSkillSection] = useState(frontEndTechArr);

  const [activeId, setActiveId] = useState(1);

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

  useEffect(() => {
    if (currentScreenWidth <= 1024 || (userDevice === 'tablet' || userDevice === 'mobile')) {
      setMobileHomeActive("mobile-section");
    } else {
      setMobileHomeActive("full-section");
    }
  }, [currentScreenWidth, userDevice]);

  return (
    <div
      id="skills"
      className={`section-block ${mobileHomeActive} flex flex-col items-center justify-top`}
    >
      <div className="skill-main">
        <menu className="skill-button-bar flex flex-row items-center justify-evenly">
          <Buttonn
            id={"fe-tab"}
            className={`${
              activeId === 1 && "bg-custom-button-bg-primary"
            } text-custom-text outline outline-1 outline-custom-primary-outline `}
            height={100}
            width={33}
            textContent={"FrontEnd"}
            action={() => {
              setActiveId(1);
              setActiveSkillSection(frontEndTechArr);
            }}
            type={"tab"}
            borderRadius={"1em 0 0 0"}
            ariaLabel={"Select FrontEnd Tab"}
          />
          <Buttonn
            id={"be-tab"}
            className={`${
              activeId === 2 && "bg-custom-button-bg-primary"
            } text-custom-text outline outline-1 outline-custom-primary-outline `}
            height={100}
            width={33}
            textContent={"BackEnd"}
            action={() => {
              setActiveId(2);
              setActiveSkillSection(backEndTechArr);
            }}
            type={"tab"}
            borderRadius={"0 0 0 0"}
            ariaLabel={"Select BackEnd Tab"}
          />
                  <Buttonn 
              id={"other-tab"}
              className={`${activeId === 3 && 'bg-custom-button-bg-primary'} text-custom-text outline outline-1 outline-custom-primary-outline `}
              height={100}
              width={33}
              textContent={"Other"}
              action={() => {setActiveId(3); setActiveSkillSection(toolsArr);}}
              type={"tab"}
              borderRadius={'0 1em 0 0'}
              ariaLabel={"Select Additional Tool Tab"}
            />

        </menu>
        {activeSkillSection.map((skill, index) => (
          <div
            key={`skill-container-${index}`}
            className="skill-progress-container"
          >
            {/* <p className="text-custom-text">{skill.Name}</p> */}
            <ProgressBar
              className="modal-bar"
              label={skill.Name}
              score={skill.progress}
            />
          </div>
        ))}
      </div>
      {/* <AnimatedRow
        iconArr={frontEndTechArr}
        heading="Front-End Tech"
        uniqueKey={0}
        callback={openSkillModal}
      />
      <AnimatedRow
        iconArr={backEndTechArr}
        heading="Back-End Tech"
        uniqueKey={1}
        callback={openSkillModal}
      />
      <AnimatedRow
        iconArr={toolsArr}
        heading="Additional Tech"
        uniqueKey={2}
        callback={openSkillModal}
      /> */}
      {skillModalOpen && userDevice === "mobile" && (
        <Modal
          arr={activeArr}
          activeHeader={activeHeader}
          modalStatus={openSkillModal}
          modalType="skill"
        />
      )}
    </div>
  );
};

export default Skill;
