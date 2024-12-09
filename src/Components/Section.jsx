import { useContext, useState } from "react";
import LiveTypeHero from "./LiveTypeHero";
import AnimatedRow from "./AnimatedRow";
import { globalIcons, myResumePDF } from "../Assets/utilities";
import {
  frontEndTechArr,
  backEndTechArr,
  toolsArr,
  resumeText,
  projectArr,
} from "../Assets/utilities";
import Modal from "./Modal";
import ProjectCard from "./ProjectCard";
import { DropDownMenu } from "./DropDownMenu";
import { GlobalContext } from "../Assets/utilities";
// import ProgressBar from "./ProgressBar";

export default function Section(props) {
  const iconSections = [
    { "Front-End Tech": frontEndTechArr },
    { "Back-End Tech": backEndTechArr },
    { "Additional Tech": toolsArr },
  ];

  const selectOptions = [
    { optionValue: "", textValue: "" },
    { optionValue: "job", textValue: "Job Inquiry" },
    { optionValue: "project", textValue: "Project Inquiry" },
    { optionValue: "chat", textValue: "Chat" },
    { optionValue: "other", textValue: "Other" },
  ];

  const { sectionName, handleContactNav } = props;
  const {userDevice} = useContext(GlobalContext);

  const [skillModalOpen, setSkillModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [activeArr, setActiveArr] = useState([]);
  const [activeHeader, setActiveHeader] = useState();
  const [activeProject, setActiveProject] = useState({});

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [reason, setReason] = useState();
  const [message, setMessage] = useState();

  const openSkillModal = (arr, header) => {
    if (arr && arr.length !== 0 && header) {
      setActiveArr(arr);
      setActiveHeader(header);
      setSkillModalOpen(true);
    } else {
      setSkillModalOpen(false);
    }
  };

  const openProjectModal = (projectObj) => {
    if (projectObj === null) {
      setProjectModalOpen(false);
    } else {
      if (Object.keys(projectObj)) {
        setActiveProject(projectObj);
        setProjectModalOpen(true);
      }
    }
  };
  const handleContactData = () => {
    const formData = {
      Name: name,
      Email: email,
      Reason: reason,
      Message: message,
    };
    console.log(formData);
  };

  if (sectionName === "home") {
    return (
      <div
        id={props.sectionName}
        className="section-block flx-col flx-align-center"
      >
        <LiveTypeHero
          text="Hi, I'm Logan McCann. A Front-End Developer With 6+ Years of Experience Building Scalable, User-Friendly Applications. Learn More About My Experience And Proficiencies By Exploring My Portfolio Or Speaking With My ChatBot"
          speed={100}
        />
        {userDevice === "mobile" ? (
          <div className="hero-btn-cont flx-col flx-align-center flx-spc-evenly">
            <button id="hero-chat-button" className="hero-button">
              <p>AI Chatbot</p>
            </button>
            <button onClick={(e) => {
              const target = document.getElementById("contact");
              handleContactNav(5);
              target.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }} className="hero-button">
              <p>Contact Now</p>
            </button>
          </div>
        ) : (
          <div>
            <h1>This is home screen els for full screen view</h1>
          </div>
        )}
      </div>
    );
  } else if (sectionName === "about") {
    return (
      <div
        id={props.sectionName}
        className="section-block flx-col flx-align-center flx-spc-evenly"
      >
        <img src={globalIcons.loganIcon} alt="" />
        <p>
          Highly adaptable and detail-oriented web developer with extensive
          background in various coding languages, building responsive websites
          from front to back, and developing mobile applications. Specializes in
          JSX and CSS. Poised to contribute creative problem solving techniques,
          excellent interpersonal skills, and time management.
      </p>
      <div>
        <button>Github</button>
        <button>LinkedIn</button>
        <button>BlueSky</button>
      </div>
      </div>
    );
  } else if (sectionName === "skills") {
    return (
      <div
        id={sectionName}
        className="section-block flx-col flx-align-center flx-spc-evenly"
      >
        {iconSections.map((obj, i) => {
          const heading = Object.keys(obj)[0];
          return userDevice === "mobile" ? (
            <div
              className="mobile-icon-container flx-col flx-spc-evenly"
              key={i}
            >
              <h1
                id={`skill-header-${i}`}
                className="mobile-skills-header"
                onClick={() => {
                  openSkillModal(obj[heading], heading);
                }}
              >
                {heading} &#8250;
              </h1>
              <div className="mobile-icon-row scroller" id={`scroller-${i}`}>
                <AnimatedRow key={i} eachArr={obj[heading]} />
              </div>
            </div>
          ) : (
            <div>
              <h1>Full screen skill section</h1>
            </div>
          );
        })}
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
  } else if (sectionName === "experience") {
    return (
      <div id={sectionName} className="section-block flx-col flx-spc-btwn">
        {resumeText.map((resumeSection, i) => {
          return (
            <div
              id={userDevice !== "mobile" ? "resume-container" : "mobile-resume-container"}
              key={i}
            >
              <h1>{resumeSection.title}</h1>
              <h2>{resumeSection.organization}</h2>
              <ul>
                <li>{resumeSection.responsibilities[0]}</li>
                <li>{resumeSection.responsibilities[1]}</li>
                {userDevice !== "mobile" && <li>{resumeSection.responsibilities[2]}</li>}
                {userDevice !== "mobile" && <li>{resumeSection.responsibilities[3]}</li>}
              </ul>
            </div>
          );
        })}
        <button>
          <a
            href={myResumePDF}
            download={myResumePDF}
          >
            Download Full Resume
          </a>
        </button>
      </div>
    );
  } else if (sectionName === "projects") {
    return (
      <div
        id={sectionName}
        className="section-block flx-rw flx-wrp flx-spc-arnd"
      >
        {projectArr.map((project, i) => {
          return userDevice === "mobile" ? (
            <ProjectCard
              key={i}
              currentProject={project}
              currentI={i}
              cb={openProjectModal}
            />
          ) : (
            <div>
              <h1>not mobile</h1>
            </div>
          );
        })}
        {projectModalOpen && userDevice === "mobile" && (
          <Modal
            projObj={activeProject}
            activeHeader={activeHeader}
            modalStatus={openProjectModal}
            modalType="project"
          />
        )}
      </div>
    );
  } else if (sectionName === "contact") {
    return (
      <div id={sectionName} className="section-block">
        <form className="contact-form flx-col flx-spc-evenly">
          <label className="flx-col">
            <input
              name="name"
              placeholder={"Name..."}
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </label>
          <label className="flx-col">
            <input
              name="email"
              placeholder={"Email..."}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <DropDownMenu
            items={selectOptions}
            buttonLabel={"Interested in..."}
            returnSelection={(optionText) => {
              setReason(optionText);
            }}
          />
          <label className="flx-col">
            <textarea
              name="message"
              placeholder="Message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </form>
        <div className="contact-btn-cont flx-col flx-align-center flx-spc-evenly">
          <button
            onClick={handleContactData}
            type="submit"
            id="contact-chat-button"
            className="contact-button"
          >
            <p>Submit</p>
          </button>
        </div>
      </div>
    );
  }
}