import { useEffect, useState } from "react";
import ProgressBar, {
  Blue,
  Green,
  Purple,
  Red,
  Custom,
  Basic,
} from "./ProgressBar/BarColors";

const Modal = (props) => {
  const { activeHeader, arr, projObj, modalType, modalStatus } = props;

  const [finalProjContArr, setFinalProjContArr] = useState([]);

  useEffect(() => {
    const tempProjContArr = [];
    if (modalType === "project") {
      projObj.techStack.map((tech, i) => {
        if (i <= 9) {
          return tempProjContArr.push(tech + " •");
        } else {
          return tempProjContArr.push(tech);
        }
      });
      setFinalProjContArr(tempProjContArr);
    }
  }, [modalType, projObj]);

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
          <>
            <img src={projObj.siteLarge} alt="idk" />
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
            <div className="contact-btn-cont flex flex-col items-center justify-evenly">
              <button
                type="submit"
                id="contact-chat-button"
                className="contact-button bg-custom-button-bg-primary"
              >
                <p className="text-custom-text">Visit Site</p>
              </button>
            </div>
          </>
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
