import { globalIcons, industryIcons } from "../Assets/utilities";
import { useState, useEffect, useContext } from "react";
import {
  cssLight,
  cssDark,
  htmlLight,
  htmlDark,
  javascriptLight,
  javascriptDark,
  nodeLight,
  nodeDark,
  reactLight,
  reactDark,
  sassLight,
  sassDark,
  tailwindLight,
  tailwindDark,
  typeScriptLight,
  typeScriptDark,
  vueLight,
  vueDark,
} from "../Assets/icon-try/index";
import { GlobalContext } from "../Assets/utilities";
import Buttonn from "../Components/Atoms/Buttonn";

const About = ({ currentScreenWidth, handleContactNav }) => {
  const { themeMode, userDevice } = useContext(GlobalContext);

  const [mobileHomeActive, setMobileHomeActive] = useState();
  const [bioPic, setBioPic] = useState("");
  const [vector, setVector] = useState("");

  const topSkillsArr = [
    { text: "HTML5", icon: `${themeMode === "light" ? htmlLight : htmlDark}` },
    { text: "CSS3", icon: `${themeMode === "light" ? cssLight : cssDark}` },
    {
      text: "Javascript",
      icon: `${themeMode === "light" ? javascriptLight : javascriptDark}`,
    },
    { text: "Node", icon: `${themeMode === "light" ? nodeLight : nodeDark}` },
    {
      text: "React",
      icon: `${themeMode === "light" ? reactLight : reactDark}`,
    },
    {
      text: "Native",
      icon: `${themeMode === "light" ? reactLight : reactDark}`,
    },
    { text: "Sass", icon: `${themeMode === "light" ? sassLight : sassDark}` },
    {
      text: "Tailwind",
      icon: `${themeMode === "light" ? tailwindLight : tailwindDark}`,
    },
    {
      text: "TypeScript",
      icon: `${themeMode === "light" ? typeScriptLight : typeScriptDark}`,
    },
    { text: "Vue", icon: `${themeMode === "light" ? vueLight : vueDark}` },
  ];

  const industryArr = [
    {
      text: "Telecom",
      icon: `${
        themeMode === "light"
          ? industryIcons.telecomIndustryIconLightTheme
          : industryIcons.telecomIndustryIconDarkTheme
      }`,
    },
    {
      text: "Photography",
      icon: `${
        themeMode === "light"
          ? industryIcons.photographyIndustryIconLightTheme
          : industryIcons.photographyIndustryIconDarkTheme
      }`,
    },
    {
      text: "Sportswear",
      icon: `${
        themeMode === "light"
          ? industryIcons.outdoorWearIndustryIconLightTheme
          : industryIcons.outdoorWearIndustryIconDarkTheme
      }`,
    },
    {
      text: "Diving",
      icon: `${
        themeMode === "light"
          ? industryIcons.scubaIndustryIconLightTheme
          : industryIcons.scubaIndustryIconDarkTheme
      }`,
    },
    {
      text: "Sustainability",
      icon: `${
        themeMode === "light"
          ? industryIcons.sustainabilityIndustryIconLightTheme
          : industryIcons.sustainabilityIndustryIconDarkTheme
      }`,
    },
  ];

  useEffect(() => {
    if (themeMode === "dark") {
      if (currentScreenWidth <= 819) {
        setVector(`${globalIcons.vectorBgSmall}`);
      } else {
        setVector(`${globalIcons.vectorBgMedium}`);
      }
    } else {
      if (currentScreenWidth <= 819) {
        setVector(`${globalIcons.vectorBgLightSmall}`);
      } else {
        setVector(`${globalIcons.vectorBgLightMedium}`);
      }
    }
  }, [themeMode, currentScreenWidth]);

  useEffect(() => {
    if (currentScreenWidth <= 1024 || (userDevice === 'tablet' || userDevice === 'mobile')) {
      setMobileHomeActive("mobile-section");
    } else {
      setMobileHomeActive("");
    }
  }, [currentScreenWidth, userDevice]);

  useEffect(() => {
    if (userDevice === "mobile") {
      setBioPic(`${globalIcons.loganTransparentSmall}`);
    } else if (userDevice === "tablet") {
      setBioPic(`${globalIcons.loganTransparentMedium}`);
    } else {
      // change to large for desktop - only here to test on chrome/desktop
      setBioPic(`${globalIcons.loganTransparentMedium}`);
    }
  }, [userDevice]);

  const navToContact = () => {
    const target = document.getElementById("contact");
    handleContactNav(5);
    target.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  function download() {
    import("../Assets/PDFs/Logan-McCann-2024-Resume.pdf")
      .then((module) => {
        const a = document.createElement("a");
        a.href = module.default;
        a.download = module.default.split("/").pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((error) => console.error("Error importing module:", error));
  }

  return (
    <div
      id="about"
      className={`section-block ${mobileHomeActive} flex flex-col sm:items-center`}
    >
      <div
        id="about-top"
        className="about-half flex sm:flex-col sm:justify-end sm:items-center md:flex-row md:justify-between "
      >
        {/* bio pic image */}
        <div
          className="about-top-left flex items-center"
          style={{ backgroundImage: `url(${vector})` }}
        >
          <img id="about-bio-pic" src={bioPic} alt="something" />
          {/* <img id="vector-bg" src={vector} alt="something" /> */}
        </div>
        {currentScreenWidth <= 819 && userDevice === "mobile" && (
          <div className="about-overlay flex flex-row justify-between items-end">
            <p className="text-custom-text bg-custom-secondary-background outline outline-1 outline-custom-primary-outline">
              loganrmccann@gmail.com
            </p>
            <ul className="text-custom-text bg-custom-secondary-background outline outline-1 outline-custom-primary-outline">
              <li>Experience</li>
              <li>FrontEnd: 5+ Years</li>
              <li>CMS: 5+ Years</li>
              <li>SEO: 5+ Years</li>
            </ul>
          </div>
        )}
        {currentScreenWidth >= 820 && (
          <div className="about-md-text-cont flex flex-col justify-evenly text-custom-text">
            <span>
              <h1>Logan McCann</h1>
              <h2>Sr. Front-End Developer</h2>
            </span>
            <p>
              Highly adaptable and detail-oriented web developer with extensive
              background in various coding languages, building responsive
              websites from front to back, and developing mobile applications.
            </p>
            <div className="achievement-block flex flex-row justify-between">
              <span>
                <h3>7</h3>
                <p>Years of Front-End Exp</p>
              </span>

              <span>
                <h3>5</h3>
                <p>Years of SEO Exp</p>
              </span>

              <span>
                <h3>5</h3>
                <p>Years of CMS Exp</p>
              </span>
            </div>
            {currentScreenWidth >= 819 && (
              <div className="about-button-container flex flex-row justify-between">
                <Buttonn
                  id={"about-nav-contact"}
                  className="bg-custom-button-bg-primary text-custom-text outline outline-1 outline-custom-primary-outline"
                  height={100}
                  width={47.5}
                  textContent={"Contact Now"}
                  action={navToContact}
                  type={"button"}
                  borderRadius={"2em"}
                  ariaLabel={"Navigate To Contact Form"}
                />
                <Buttonn
                  id={"about-resume-download"}
                  className="bg-custom-button-bg-primary text-custom-text outline outline-1 outline-custom-primary-outline"
                  height={100}
                  width={47.5}
                  textContent={"Download Resume"}
                  action={download}
                  type={"button"}
                  borderRadius={"2em"}
                  ariaLabel={"Download Full Resume"}
                />
              </div>
            )}
          </div>
        )}
      </div>
      <div id="about-bottom" className="about-half text-custom-text">
        {currentScreenWidth <= 819 && (
          <div className="flex flex-col justify-around">
            <h1>Logan McCann</h1>
            <h2>Sr. Front-End Developer</h2>
            <p>
              Highly adaptable and detail-oriented web developer with extensive
              background in various coding languages, building responsive
              websites from front to back, and developing mobile applications.
            </p>
          </div>
        )}

        {currentScreenWidth >= 820 && (
          <>
            <div className="industry-icon-container">
              <h2>Industry Experience</h2>
              <ul>
                {industryArr.map((industryObj, index) => (
                <li key={index} className="flex flex-col items-center justify-evenly">
                  <img src={`${industryObj.icon}`} alt={`${industryObj.text}`} />
                  <p>{industryObj.text}</p>
                </li>
                ))}
              </ul>
            </div>
          </>
        )}
        <div className="proficiencies-container">
          {currentScreenWidth >= 820 && (
                        <h2>Proficiencies</h2>
          )}
          <ul>
            {topSkillsArr.map((skillItem, index) => (
              <li className="flex flex-col items-center justify-center">
                <img
                  key={index}
                  src={`${skillItem.icon}`}
                  alt={`${skillItem.text}`}
                />
                <p>{skillItem.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
