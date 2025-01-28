import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Assets/utilities";
import { frontEndTechArr, backEndTechArr, toolsArr } from "../Assets/utilities";
import AnimatedRow from "../Components/Organisms/AnimatedRow";
import ProgressBar from "../Components/Atoms/ProgressBar";
import Modal from "../Components/Modal";
import { animateProjectRows } from "../Assets/utilities";

const Skill = ({ currentScreenWidth }) => {
  const { userDevice } = useContext(GlobalContext);
  const [activeArr, setActiveArr] = useState([]);
  const [activeHeader, setActiveHeader] = useState();
  const [skillModalOpen, setSkillModalOpen] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [mobileHomeActive, setMobileHomeActive] = useState();
  const mainContainerEl = document.getElementById("main-page");
  const [activeSkillSection, setActiveSkillSection] = useState(frontEndTechArr);

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

  // useEffect(() => {
  //   const scrollerEls = document.querySelectorAll(".scroller");
  //   if (!animationStarted && scrollerEls.length === 3) {
  //     animateProjectRows("start");
  //     setAnimationStarted(true);
  //   }
  // }, [animationStarted]);

  useEffect(() => {
    if (currentScreenWidth <= 1025) {
      setMobileHomeActive("mobile-section");
    } else {
      setMobileHomeActive("");
    }
  }, [currentScreenWidth]);

  useEffect(() => {
    document.getElementById("fe-btn").classList.add("skill-button-active");
  },[])


  const handleSkillSelect = (e) => {
    e.preventDefault();
    const targetId = e.target.id;
    // setActiveSkillSection(e.target.id);
    if(targetId === "fe-btn"){
      document.getElementById("be-btn").classList.remove("skill-button-active");
      document.getElementById("other-btn").classList.remove("skill-button-active");
      document.getElementById(targetId).classList.add("skill-button-active");
      setActiveSkillSection(frontEndTechArr);
    }else if(targetId === "be-btn"){
      document.getElementById("fe-btn").classList.remove("skill-button-active");
      document.getElementById("other-btn").classList.remove("skill-button-active");
      document.getElementById(targetId).classList.add("skill-button-active");
      setActiveSkillSection(backEndTechArr);
    }else if(targetId === "other-btn"){
      document.getElementById("fe-btn").classList.remove("skill-button-active");
      document.getElementById("be-btn").classList.remove("skill-button-active");
      document.getElementById(targetId).classList.add("skill-button-active");
      setActiveSkillSection(toolsArr);
    }
    // console.log(e.target.id, "target id");
  }


  return (
    <div
      id="skills"
      className={`section-block ${mobileHomeActive} flex flex-col items-center justify-top`}
    >
      <div className="skill-main">
        <div className="skill-button-bar flex flex-row items-center justify-evenly">
          <button 
          id="fe-btn"
          className="text-custom-text"
          onClick={(e) => {handleSkillSelect(e)}}
          >
            FrontEnd
          </button>
          <button 
          id="be-btn"
          className="text-custom-text"
          onClick={(e) => {handleSkillSelect(e)}}
          >
            BackEnd
          </button>
          <button 
          id="other-btn"
          className="text-custom-text"
          onClick={(e) => {handleSkillSelect(e)}}
          >
            Other
          </button>
          </div>
              {activeSkillSection.map((skill, index) => (
                <div key={`skill-container-${index}`} className="skill-progress-container">
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
