import { globalIcons, industryIcons } from "../Assets/utilities";
import { useState, useEffect, useContext, useRef } from "react";
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
import AboutMobile from "./AboutLayouts/AboutMobile";
import AboutTablet from "./AboutLayouts/AboutTablet";
import AboutDesktop from "./AboutLayouts/AboutDesktop";

const About = ({ currentScreenWidth, handleContactNav }) => {
  const { themeMode, userDevice } = useContext(GlobalContext);

  const [mobileHomeActive, setMobileHomeActive] = useState();
  const [bioPic, setBioPic] = useState(
    userDevice === "mobile"
      ? `${globalIcons.loganTransparentSmall}`
      : `${globalIcons.loganTransparentMedium}`
  );
  const [vector, setVector] = useState();
  const [activeLayout, setActiveLayout] = useState();

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

  // useEffect(() => {
  //   if (themeMode === "dark") {
  //     if (userDevice === 'mobile') {
  //       setVector(`${globalIcons.vectorBgSmall}`);
  //     } else {
  //       setVector(`${globalIcons.vectorBgMedium}`);
  //     }
  //   } else {
  //     if (userDevice === 'mobile') {
  //       setVector(`${globalIcons.vectorBgLightSmall}`);
  //     } else {
  //       setVector(`${globalIcons.vectorBgLightMedium}`);
  //     }
  //   }
  // }, [themeMode, currentScreenWidth, userDevice]);

  useEffect(() => {
    if (userDevice === 'mobile' || userDevice === 'tablet') {
      setMobileHomeActive("mobile-section");
    } else {
      setMobileHomeActive("full-section");
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

  const propsObj = {
    bioPic: bioPic,
    topSkillsArr: topSkillsArr,
    navToContact: navToContact,
    industryArr: industryArr,
    download: download,
    vector: themeMode === "dark" ? `${globalIcons.vectorBgLightMedium}` : `${globalIcons.vectorBgMedium}`
  };

  const pageProps = useRef(propsObj);

  useEffect(() => {
    // console.log(userDevice, "here")
    if (userDevice === 'mobile') {
      setActiveLayout(<AboutMobile pageProps={pageProps.current} />);
    } else if (userDevice === 'tablet') {
      setActiveLayout(<AboutTablet pageProps={pageProps.current} />);
    } else if (userDevice === 'desktop') {
      setActiveLayout(<AboutDesktop pageProps={pageProps.current} />);
    }
  }, [userDevice]);

  return (
    <div
      id="about"
      className={`section-block ${mobileHomeActive} flex flex-col sm:items-center`}
    >
      {activeLayout}
    </div>
  );
};

export default About;
