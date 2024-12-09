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

  return modalType === "project" ? (
    <div className="project-modal">
      <div className="project-close-bar flx-rw flx-spc-btwn flx-align-center">
        <h1>
          {projObj.siteName} | {projObj.company}
        </h1>
        <button
          id="close-modal"
          onClick={() => {
            props.modalStatus(null);
          }}
        >
          X
        </button>
      </div>
      <div className="project-modal-body flx-col flx-spc-btwn">
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
        <button
          onClick={() => {
            window.open(projObj.siteUrl, "_blank");
          }}
        >
          Visit Now &#8250;
        </button>
      </div>
    </div>
  ) : (
    <div className="skill-modal flx-col">
      <div className="modal-top flx-rw">
        <h1 className="flx-rw flx-start flx-start">{activeHeader}</h1>
        <button
          id="close-modal"
          className="flx-rw flx-end"
          onClick={() => {
            props.modalStatus(null);
          }}
        >
          X
        </button>
      </div>
      <div className="modal-body flx-rw flx flx-center">
        <ul className="flx-col">
          {arr.map((arrItem, i) => {
            return (
              <div key={i}>
                <p>{arrItem.Name}</p>
                <ProgressBar className="modal-bar" score={arrItem.progress} />
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
