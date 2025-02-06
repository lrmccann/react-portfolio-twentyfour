import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Assets/utilities";
import { frontEndTechArr, backEndTechArr, toolsArr } from "../Assets/utilities";
import AnimatedRow from "../Components/Organisms/AnimatedRow";
import ProgressBar from "../Components/Atoms/ProgressBar";
import Modal from "../Components/Modal";
import { animateProjectRows } from "../Assets/utilities";
import Buttonn from "../Components/Atoms/Buttonn";
import SkillRegular from "./SkillLayouts/SkillRegular";
import SkillDesktop from "./SkillLayouts/SkillDesktop";

const Skill = ({ currentScreenWidth }) => {
  const { userDevice } = useContext(GlobalContext);
  // const [activeArr, setActiveArr] = useState([]);
  // const [activeHeader, setActiveHeader] = useState();
  // const [skillModalOpen, setSkillModalOpen] = useState(false);
  // const [animationStarted, setAnimationStarted] = useState(false);
  const [mobileHomeActive, setMobileHomeActive] = useState();
  // const mainContainerEl = document.getElementById("main-page");
  const [activeSkillSection, setActiveSkillSection] = useState(frontEndTechArr);
  const [activeId, setActiveId] = useState(1);

  const [skillLayout, setSkillLayout] = useState();
  
  useEffect(() =>{
    if(activeId === 1){
      setActiveSkillSection(frontEndTechArr);
    } else if(activeId === 2){
      setActiveSkillSection(backEndTechArr);
    }else if(activeId === 3){
      setActiveSkillSection(toolsArr);
    }
  }, [activeId]);

  useEffect(() => {
    if(userDevice === 'mobile' || userDevice === 'tablet'){
      setSkillLayout(<SkillRegular activeSkillSection={activeSkillSection} activeId={activeId} setIdCallback={(id) => setActiveId(id)} />)
    }else {
      setSkillLayout(<SkillDesktop  />)
    }
  }, [activeId, activeSkillSection, userDevice])

  useEffect(() => {
    if (userDevice === "mobile" || userDevice === "tablet") {
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
      {skillLayout}
    </div>
  );
};

export default Skill;
