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

  return (
    <div className="modal-container">
      <div className="modal-top flx-rw flx-spc-btwn flx-align-center">
          {modalType === "project" ? (
            <h1>
              {projObj.siteName} | {projObj.company}
            </h1>
          ) : (
            <h1 className="flx-rw flx-start flx-start">{activeHeader}</h1>
          )}
        <button
          id="close-modal"
          onClick={() => {
            modalStatus(null);
          }}
        >
          <h1>X</h1>
        </button>
      </div>
      <div className={`${modalType}-modal-body`}>
        {modalType === "project" ? (
          <>
            <img src={projObj.siteLarge} alt="idk" />
            <div className="project-modal-text-container">
              <label>Contributions</label>
              <ul className="contribution-list">
                {projObj.contributions.map((contribution, i) => {
                  return <li key={i}>{contribution}</li>;
                })}
              </ul>
              <br></br>
              <label>Tech Used</label>
              <ul className="proj-tech-section flx-rw flx-wrp">
                {projObj.techStack.map((tech, i) => {
                  return <li key={i}> {tech} </li>;
                })}
              </ul>
            </div>
            <div className="contact-btn-cont flx-col flx-align-center flx-spc-evenly">
              <button
                type="submit"
                id="contact-chat-button"
                className="contact-button"
              >
                <p>Visit Site</p>
              </button>
            </div>
          </>
        ) : (
          <>
            <ul className="flx-col">
              {arr.map((arrItem, i) => {
                return (
                  <div key={i} className="skill-progress-container">
                    <p>{arrItem.Name}</p>
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
