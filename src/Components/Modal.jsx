import { useEffect, useState } from "react";
import ProgressBar, {
  Blue,
  Green,
  Purple,
  Red,
  Custom,
  Basic,
} from "./Atoms/BarColors";
import Image from "../Components/Atoms/Image";
import Buttonn from "../Components/Atoms/Buttonn";

const Modal = (props) => {
  const {
    activeHeader,
    arr,
    projObj,
    modalType,
    modalStatus,
    currentScreenWidth,
  } = props;

  const [finalProjContArr, setFinalProjContArr] = useState([]);
  const [activeProjectImage, setActiveProjectImage] = useState();

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
    if (currentScreenWidth <= 1025 && modalType === "project") {
      setActiveProjectImage(projObj.siteThumbnail);
    } else if (currentScreenWidth >= 1025 && modalType === "project") {
      setActiveProjectImage(projObj.siteLarge);
    }
  }, [currentScreenWidth, projObj, modalType]);

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
        <h1 className="text-custom-text">
          {projObj.siteName} | {projObj.company}
        </h1>

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
        {/* <div> */}
          <Image
            className="project-modal-image"
            aspectRatio={1.5 / 0.9}
            borderRadius={"1em"}
            imageSrc={activeProjectImage}
            altText="idk"
          />
          <span>
            <label className="text-custom-text">Contributions</label>
            <ul className="contribution-list text-custom-text">
              {projObj.contributions.map((contribution, i) => {
                return <li key={i}>{contribution}</li>;
              })}
            </ul>
          </span>
          <span>
            <label className="text-custom-text pl-2">Tech Used</label>
            <ul className="proj-tech-section flex flex-row flex-wrap text-custom-text">
              {finalProjContArr.map((tech, i) => {
                return <li key={i}> {tech} </li>;
              })}
            </ul>
          </span>

          {/* <Button
            id="proj-modal-button"
            width={100}
            height={100}
            bottom={2}
            containerPadding={"0 2.5% 0 2.5%"}
            containerSize={10}
            type="url"
            className="bg-custom-button-bg-primary"
            textContent="Visit Site"
          /> */}

        {/* </div> */}
        <div className="proj-modal-btn-cont">
      <Buttonn 
              // id={`open-project-btn-${projObj.id}`}
              className='text-custom-text bg-custom-button-bg-primary'
              height={80}
              width={100}
              textContent={"Visit Site"}
              action={() => {window.open(projObj.siteUrl, '_blank')}}
              type={"button"}
              borderRadius={'1em'}
              ariaLabel={"Select Additional Tool Tab"}
            />
            </div>
      </div>
    </div>
  );
};

export default Modal;
