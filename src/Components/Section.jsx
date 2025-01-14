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
import { GlobalContext } from "../Assets/utilities";
import ContactForm from "./ContactForm";
import { darkIconArr } from "../Assets/utilities";

export default function Section(props) {
  const iconSections = [
    { "Front-End Tech": frontEndTechArr },
    { "Back-End Tech": backEndTechArr },
    { "Additional Tech": toolsArr },
  ];

  const roleOptions = [
    "Front-End Developer",
    "UI Designer",
    "SEO Specialist",
    "Team Lead",
    "Back-End Engineer",
    "CMS Expert",
    "Web Master",
    "Dog Dad",
  ];

  const { sectionName, handleContactNav, currentThemeMode } = props;
  const { userDevice } = useContext(GlobalContext);

  const [skillModalOpen, setSkillModalOpen] = useState(false);
  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [activeArr, setActiveArr] = useState([]);
  const [activeHeader, setActiveHeader] = useState();
  const [activeProject, setActiveProject] = useState({});

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

  const openProjectModal = (projectObj) => {
    if (projectObj === null) {
      setProjectModalOpen(false);
      mainContainerEl.classList.remove("modal-open");
    } else {
      if (Object.keys(projectObj)) {
        setActiveProject(projectObj);
        setProjectModalOpen(true);
        mainContainerEl.classList.add("modal-open");
      }
    }
  };

  const socialNav = (socialUrl) => {};

  if (sectionName === "home") {
    return (
      <div
        id={props.sectionName}
        className="section-block flex flex-col items-center"
      >
        <h3 className="text-custom-text">Hi, I'm</h3>
        <h1 className="text-custom-text">Logan McCann</h1>
        <LiveTypeHero
          text={roleOptions}
          // text="Hi, I'm Logan McCann. A Front-End Developer With 6+ Years of Experience Building Scalable, User-Friendly Applications. Learn More About My Experience And Proficiencies By Exploring My Portfolio Or Speaking With My ChatBot"
          speed={200}
        />
        {userDevice === "mobile" ? (
          <div className="hero-btn-cont flex flex-col items-center justify-evenly">
            <button
              id="hero-chat-button"
              className="hero-button bg-custom-button-bg-primary"
            >
              <p className="text-custom-text">AI Chatbot</p>
            </button>
            <button
              onClick={() => {
                const target = document.getElementById("contact");
                handleContactNav(5);
                target.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
              className="hero-button bg-custom-button-bg-primary"
            >
              <p className="text-custom-text">Contact Now</p>
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-custom-text">
              This is home screen els for full screen view
            </h1>
          </div>
        )}
      </div>
    );
  } else if (sectionName === "about") {
    return (
      <div
        id={props.sectionName}
        className="section-block flex flex-col items-center justify-evenly"
      >
        {/* <img src={globalIcons.loganIcon} alt="" /> */}
        <img src={globalIcons.loganIcon} alt="" />
        <p className="text-custom-text">
          Highly adaptable and detail-oriented web developer with extensive
          background in various coding languages, building responsive websites
          from front to back, and developing mobile applications. Specializes in
          JSX and CSS. Poised to contribute creative problem solving techniques,
          excellent interpersonal skills, and time management.
        </p>
        {/* <div className="social-container">
          <button
            onClick={() => {
              socialNav("https://www.linkedin.com/in/logan-mccann/");
            }}
          >
            <img
              src={
                currentThemeMode === "dark"
                  ? `${globalIcons.linkedinIconDark}`
                  : `${globalIcons.linkedinIcon}`
              }
              alt="Blue LinkedIn Icon Pointing To Logan McCann's LinkedIn Account"
            />
          </button>
          <button
            onClick={() => {
              socialNav("https://github.com/lrmccann");
            }}
          >
            <img
              src={
                currentThemeMode === "dark"
                  ? `${globalIcons.githubIconDark}`
                  : `${globalIcons.githubIcon}`
              }
              alt="Blue Github Icon Pointing To Logan McCann's Github Account"
            />
          </button>
          <button
            onClick={() => {
              socialNav("https://github.com/lrmccann");
            }}
          >
            <img
              src={
                currentThemeMode === "dark"
                  ? `${globalIcons.blueSkyIconDark}`
                  : `${globalIcons.blueskyIcon}`
              }
              className={currentThemeMode === "dark" ? "bluesky-active" : " "}
              alt="Blue BlueSky Icon Pointing To Logan McCann's BlueSky Account"
            />
          </button>
        </div> */}
      </div>
    );
  } else if (sectionName === "skills") {
    return (
      <div
        id={sectionName}
        className="section-block flex flex-col items-center justify-evenly"
      >
        {iconSections.map((obj, i) => {
          const heading = Object.keys(obj)[0];
          return userDevice === "mobile" ? (
            <div
              className="mobile-icon-container flex flex-col justify-evenly"
              key={i}
            >
              <h1
                id={`skill-header-${i}`}
                className="mobile-skills-header text-custom-text"
                onClick={() => {
                  openSkillModal(obj[heading], heading);
                }}
              >
                {heading} &#8250;
                {/* <div className="line"></div> */}
              </h1>
              <div className="mobile-icon-row scroller" id={`scroller-${i}`}>
                <AnimatedRow
                  key={i}
                  eachArr={obj[heading]}
                  currentThemeMode={currentThemeMode}
                />
              </div>
            </div>
          ) : (
            <div>
              <h1 className="text-custom-text">Full screen skill section</h1>
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
      <div
        id={sectionName}
        className="section-block flex flex-col justify-evenly"
      >
        {resumeText.map((resumeSection, i) => {
          return (
            <div
              id={
                userDevice !== "mobile"
                  ? "resume-container"
                  : "mobile-resume-container"
              }
              key={i}
            >
              <h1 className="text-custom-text">{resumeSection.title}</h1>
              <h2 className="text-custom-text">{resumeSection.organization}</h2>
              <ul className="text-custom-text">
                <li>{resumeSection.responsibilities[0]}</li>
                <li>{resumeSection.responsibilities[1]}</li>
                {userDevice !== "mobile" && (
                  <li>{resumeSection.responsibilities[2]}</li>
                )}
                {userDevice !== "mobile" && (
                  <li>{resumeSection.responsibilities[3]}</li>
                )}
              </ul>
            </div>
          );
        })}
        <div className="contact-btn-cont flex flex-col items-center justify-evenly">
          <button
            id="contact-chat-button"
            className="contact-button bg-custom-button-bg-primary"
          >
            <a
              href={myResumePDF}
              download={myResumePDF}
              className="text-custom-text"
            >
              Download Full Resume
            </a>
          </button>
        </div>
      </div>
    );
  } else if (sectionName === "projects") {
    return (
      <div
        id={sectionName}
        className="section-block flex flex-row flex-wrap justify-around"
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
              <h1 className="text-custom-text">not mobile</h1>
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
        <ContactForm currentThemeMode={currentThemeMode} />
      </div>
    );
  }
}
