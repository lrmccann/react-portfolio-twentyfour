import { useEffect, useState } from "react";
import ProgressBar, {
  Blue,
  Green,
  Purple,
  Red,
  Custom,
  Basic,
} from "./Atoms/BarColors";
import Image from '../Components/Atoms/Image';
import Button from '../Components/Atoms/Button';

const Modal = (props) => {
  const { activeHeader, arr, projObj, modalType, modalStatus, currentScreenWidth } = props;

  const [finalProjContArr, setFinalProjContArr] = useState([]);
  const [activeProjectImage, setActiveProjectImage] = useState();

  useEffect(() => {
    const tempProjContArr = [];
    if (modalType === "project") {
      projObj.techStack.map((tech, i) => {
        if (i < projObj.techStack.length) {
          return tempProjContArr.push(tech + " •");
        } else if(i === projObj.techStack.length) {
          return tempProjContArr.push(tech);
        }
      });
      setFinalProjContArr(tempProjContArr);
    }
  }, [modalType, projObj]);

  useEffect(() => {
    if(currentScreenWidth <= 1025 && modalType === "project"){
      setActiveProjectImage(projObj.siteThumbnail);
    }else if(currentScreenWidth >= 1025 && modalType === "project") {
      setActiveProjectImage(projObj.siteLarge);
    }
  }, [currentScreenWidth, projObj, modalType])

  return (
    <div className="modal-container bg-custom-primary-background">
      <div className="modal-top flex flex-row justify-between items-center">
        {modalType === "project" ? (
          <h1 className="text-custom-text">
            {projObj.siteName} | {projObj.company}
          </h1>
        ) : (
          <h1 className="flex flex-row justify-start text-custom-text">
            {activeHeader}
          </h1>
        )}
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
        {modalType === "project" ? (
          <div>
            <Image className="project-modal-image" aspectRatio={1.5/.9} borderRadius={'1em'} imageSrc={activeProjectImage} altText="idk" />
            <span>
              <label className="text-custom-text">Contributions</label>
              <ul className="contribution-list text-custom-text">
                {projObj.contributions.map((contribution, i) => {
                  return <li key={i}>{contribution}</li>;
                })}
              </ul>
            </span>
            <span>
              <label className="text-custom-text">Tech Used</label>
              <ul className="proj-tech-section flex flex-row flex-wrap text-custom-text">
                {finalProjContArr.map((tech, i) => {
                  return <li key={i}> {tech} </li>;
                })}
              </ul>
            </span>
            <Button id="proj-modal-button" width={100} height={100} bottom={2} containerPadding={"0 2.5% 0 2.5%"} containerSize={10} type="url"  className="bg-custom-button-bg-primary" textContent="Visit Site"   />
          </div>
        ) : (
          <>
            <ul className="flex flex-col text-custom-text">
              {arr.map((arrItem, i) => {
                return (
                  <div key={i} className="skill-progress-container">
                    <p className="text-custom-text">{arrItem.Name}</p>
                    <ProgressBar
                      className="modal-bar"
                      score={arrItem.progress}
                    />
                  </div>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
