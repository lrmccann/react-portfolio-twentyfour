import { useState, useEffect } from "react";
import { navigationIcons } from "../Assets/utilities";
import Icon from "./Atoms/Icon";

const Footer = () => {
  const buttonLabels = [
    {"Home": `${navigationIcons.homeIconLightTheme}`},
    {"About": `${navigationIcons.aboutIconLightTheme}`},
    {"Skills": `${navigationIcons.skillIconLightTheme}`},
    {"Projects": `${navigationIcons.projectIconLightTheme}`},
    {"Resume": `${navigationIcons.experienceIconLightTheme}`},
    {"Contact": `${navigationIcons.contactIconLightTheme}`},
  ];

  return (
    <div className="footer-main flex flex-row items-center justify-center bg-custom-primary-background">
      <div className="footer-bar flex flex-row items-center justify-evenly">
        {buttonLabels.map((label, i) => (
        <div className="footer-button flex flex-col items-center justify-between">
            <button ></button>
            {/* <div> */}
              <Icon id={i} className="nav-item" source={Object.values(label)[0]}  key={i} />
              <p>{Object.keys(label)[0]}</p>
              </div>
         ))} 
      </div>
    </div>
  );
};

export default Footer;
