import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Assets/utilities";
import { frontEndTechArr, backEndTechArr, toolsArr } from "../Assets/utilities";
import AnimatedRow from "../Components/Organisms/AnimatedRow";
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
    const scrollerEls = document.querySelectorAll(".scroller");
    if (!animationStarted && scrollerEls.length === 3) {
      animateProjectRows("start");
      setAnimationStarted(true);
    }
  }, [animationStarted]);

  useEffect(() => {
    if (currentScreenWidth <= 1025) {
      setMobileHomeActive("mobile-section");
    } else {
      setMobileHomeActive("");
    }
  }, [currentScreenWidth]);

  return (
    <div
      id="skills"
      className={`section-block ${mobileHomeActive} flex flex-col items-center justify-evenly`}
    >
      <AnimatedRow
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
      />
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
