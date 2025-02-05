import { useEffect, useState, useContext } from "react";
import ProgressBar, {
  Blue,
  Green,
  Purple,
  Red,
  Custom,
  Basic,
} from "./Atoms/BarColors";
import Image from "../Components/Atoms/Image";
import { GlobalContext } from "../Assets/utilities";
import Buttonn from "../Components/Atoms/Buttonn";

const Modal = (props) => {
  const {userDevice} = useContext(GlobalContext);
  const { projObj, modalType, modalStatus, currentScreenWidth } = props;

  const [finalProjContArr, setFinalProjContArr] = useState([]);

  useEffect(() => {
    const tempProjContArr = [];
    if (modalType === "project") {
      projObj.techStack.map((tech, i) => {
        if (i < projObj.techStack.length) {
          tempProjContArr.push(tech + " •");
        } else if (i === projObj.techStack.length) {
          tempProjContArr.push(tech);
        }
        return tempProjContArr;
      });
      setFinalProjContArr(tempProjContArr);
    }
  }, [modalType, projObj]);

  const mainContainerEl = document.getElementById("main-page");

  useEffect(() => {
    if (modalStatus) {
      mainContainerEl.classList.add("modal-open");
      document.addEventListener("keydown", function (event) {
        event.preventDefault();
        if (event.key === "Escape") {
          modalStatus(null);
        }
      });
    } else {
      mainContainerEl.classList.remove("modal-open");
    }
  }, [modalStatus, mainContainerEl]);

  return (
    <div className="modal-container bg-custom-primary-background">
      <div className="modal-top flex flex-row justify-between items-center">
        <h3 className="text-custom-text">
          {projObj.siteName} | {projObj.company}
        </h3>

        <button
          id="close-modal"
          onClick={() => {
            modalStatus(null);
          }}
        >
          <h1 className="text-custom-text">X</h1>
        </button>
      </div>
      <div className={`${modalType}-modal-body`}>
        <Image
          className="project-modal-image"
          aspectRatio={1.5 / 0.9}
          borderRadius={"1em"}
          imageSrc={
            currentScreenWidth <= 1024 || (userDevice === 'tablet' || userDevice === 'mobile') ? projObj.siteMedium : projObj.siteMedium
          }
          altText="idk"
        />
        <span>
          <h4 className="text-custom-text">Contributions</h4>
          <ul className="contribution-list text-custom-text">
            {projObj.contributions.map((contribution, i) => {
              return <li key={i}>{contribution}</li>;
            })}
          </ul>
        </span>
        <span>
          <h4 className="text-custom-text pl-2">Tech Used</h4>
          <ul className="proj-tech-section flex flex-row flex-wrap text-custom-text">
            {finalProjContArr.map((tech, i) => {
              return <li key={i}> {tech} </li>;
            })}
          </ul>
        </span>
        <div className="proj-modal-btn-cont">
          <Buttonn
            className="text-custom-text bg-custom-button-bg-primary"
            height={80}
            width={100}
            textContent={"Visit Site"}
            action={() => {
              window.open(projObj.siteUrl, "_blank");
            }}
            type={"button"}
            borderRadius={"1em"}
            ariaLabel={"Select Additional Tool Tab"}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
