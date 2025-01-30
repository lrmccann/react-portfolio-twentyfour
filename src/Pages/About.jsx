import { globalIcons, industryIcons } from "../Assets/utilities";
import { useState, useEffect, useContext } from "react";
import Button from "../Components/Atoms/Button";
import Icon from "../Components/Atoms/Icon";

import cssLight from "../Assets/icon-try/css-light.png";
import cssDark from "../Assets/icon-try/css-dark.png";

import htmlLight from "../Assets/icon-try/html-light.png";
import htmlDark from "../Assets/icon-try/html-dark.png";

import javascriptLight from "../Assets/icon-try/javascript-light.png";
import javascriptDark from "../Assets/icon-try/javascript-dark.png";

import nodeLight from "../Assets/icon-try/node-light.png";
import nodeDark from "../Assets/icon-try/node-dark.png";

import reactLight from "../Assets/icon-try/react-light.png";
import reactDark from "../Assets/icon-try/react-dark.png";

import sassLight from "../Assets/icon-try/sass-light.png";
import sassDark from "../Assets/icon-try/sass-dark.png";

import tailwindLight from "../Assets/icon-try/tailwind-light.png";
import tailwindDark from "../Assets/icon-try/tailwind-dark.png";

import typeScriptLight from "../Assets/icon-try/typescript-light.png";
import typeScriptDark from "../Assets/icon-try/typescript-dark.png";

import vueLight from "../Assets/icon-try/vue-light.png";
import vueDark from "../Assets/icon-try/vue-dark.png";

import { GlobalContext } from "../Assets/utilities";
import Buttonn from "../Components/Atoms/Buttonn";

const About = ({ currentScreenWidth, handleContactNav }) => {
  const { themeMode } = useContext(GlobalContext);

  const [mobileHomeActive, setMobileHomeActive] = useState();

  useEffect(() => {
    if (currentScreenWidth <= 1025) {
      setMobileHomeActive("mobile-section");
    } else {
      setMobileHomeActive("");
    }
  }, [currentScreenWidth]);

  const navToContact = () => {
    const target = document.getElementById("contact");
    handleContactNav(5);
    target.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  return (
    <div
      id="about"
      className={`section-block ${mobileHomeActive} flex flex-col items-center`}
    >
      <div
        id="about-top"
        className="about-half flex flex-col justify-end items-center"
      >
        {/* bio pic image */}
        <img
          id="about-bio-pic"
          src={globalIcons.loganTransparent}
          alt="something"
        />
        <img
          id="vector-bg"
          src={
            themeMode === "light"
              ? `${globalIcons.vectorBgLight}`
              : `${globalIcons.vectorBg}`
          }
          alt="something"
        />
        {/* bottom overlay to show email and other stats in modal type box */}
        <div className="about-overlay flex flex-row justify-between items-end">
          {/* MAYBE ADD EMAIL ICON */}
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
      </div>
      <div id="about-bottom" className="about-half text-custom-text">
        <h1>Logan McCann</h1>
        <h2>Sr. Front-End Developer</h2>
        <p>
          Highly adaptable and detail-oriented web developer with extensive
          background in various coding languages, building responsive websites
          from front to back, and developing mobile applications.
        </p>
        <label>Proficiencies</label>
        <ul>
          <li className="flex flex-col items-center justify-center">
            <img
              src={themeMode === "dark" ? `${htmlDark}` : `${htmlLight}`}
              alt="test"
            />
            <p className="text-custom-text">HTML</p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <img
              src={themeMode === "dark" ? `${cssDark}` : `${cssLight}`}
              alt="test"
            />
            <p className="text-custom-text">CSS</p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <img
              src={
                themeMode === "dark"
                  ? `${javascriptDark}`
                  : `${javascriptLight}`
              }
              alt="test"
            />
            <p className="text-custom-text">Javascript</p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <img
              src={themeMode === "dark" ? `${nodeDark}` : `${nodeLight}`}
              alt="test"
            />
            <p className="text-custom-text">Node.js</p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <img
              src={themeMode === "dark" ? `${reactDark}` : `${reactLight}`}
              alt="test"
            />
            <p className="text-custom-text">React</p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <img
              src={themeMode === "dark" ? `${reactDark}` : `${reactLight}`}
              alt="test"
            />
            <p className="text-custom-text">Native</p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <img
              src={themeMode === "dark" ? `${sassDark}` : `${sassLight}`}
              alt="test"
            />
            <p className="text-custom-text">Sass</p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <img
              src={
                themeMode === "dark" ? `${tailwindDark}` : `${tailwindLight}`
              }
              alt="test"
            />
            <p className="text-custom-text">Tailwind</p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <img
              src={
                themeMode === "dark"
                  ? `${typeScriptDark}`
                  : `${typeScriptLight}`
              }
              alt="test"
            />
            <p className="text-custom-text">TypeScript</p>
          </li>
          <li className="flex flex-col items-center justify-center">
            <img
              src={themeMode === "dark" ? `${vueDark}` : `${vueLight}`}
              alt="test"
            />
            <p className="text-custom-text">Vue</p>
          </li>
        </ul>
        <div className="about-social-container"></div>
      </div>
    </div>
  );
};

export default About;
