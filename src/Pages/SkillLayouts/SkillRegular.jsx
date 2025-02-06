import Buttonn from "../../Components/Atoms/Buttonn";
import ProgressBar from "../../Components/Atoms/BarColors";

const SkillRegular = ({activeId, activeSkillSection, setIdCallback }) => {
  return (
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
                setIdCallback(1);
            //   setActiveId(1);
            //   setActiveSkillSection(frontEndTechArr);
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
                setIdCallback(2);
            //   setActiveId(2);
            //   setActiveSkillSection(backEndTechArr);
            }}
            type={"tab"}
            borderRadius={"0 0 0 0"}
            ariaLabel={"Select BackEnd Tab"}
          />
          <Buttonn
            id={"other-tab"}
            className={`${
              activeId === 3 && "bg-custom-button-bg-primary"
            } text-custom-text outline outline-1 outline-custom-primary-outline `}
            height={100}
            width={33}
            textContent={"Other"}
            action={() => {
                setIdCallback(3);
            //   setActiveId(3);
            //   setActiveSkillSection(toolsArr);
            }}
            type={"tab"}
            borderRadius={"0 1em 0 0"}
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
  );
};


export default SkillRegular;