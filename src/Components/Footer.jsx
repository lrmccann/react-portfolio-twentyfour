import { useState, useContext, useRef, useEffect } from "react";
import { navigationIcons } from "../Assets/utilities";
import Icon from "./Atoms/Icon";
import { GlobalContext } from "../Assets/utilities";
// import {lowerCaseSectionsArr} from '../Assets/utilities';



function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const Footer = ({handleMenuNavigation, activeTab}) => {

  const [currentRoute, setCurrentRoute] = useState(0);

  const prevTab = usePrevious(activeTab);
  const { lowerCaseSectionsArr } = useContext(GlobalContext);

  const buttonLabels = [
    {"Home": `${navigationIcons.homeIconDarkTheme}`},
    {"About": `${navigationIcons.aboutIconDarkTheme}`},
    {"Skills": `${navigationIcons.skillIconDarkTheme}`},
    {"Projects": `${navigationIcons.experienceIconDarkTheme}`},
    {"Resume": `${navigationIcons.projectIconDarkTheme}`},
    {"Contact": `${navigationIcons.contactIconDarkTheme}`},
  ];

  const navAction = (e) => {
    e.preventDefault();
    const target = document.getElementById(lowerCaseSectionsArr[e.target.id]);
    if (target) {
      handleMenuNavigation(target);
      if (prevTab > activeTab) {
        target.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };


  return (
    <div className="footer-main flex flex-row items-center justify-center bg-custom-primary-background">
      <div className="footer-bar flex flex-row items-center justify-evenly">
        {buttonLabels.map((label, i) => (
        <div className="footer-button flex flex-col items-center justify-end">
            <button
            onClick={(e) => {
              navAction(e);
            }}
            key={`footer-key-${i}`}
            id={i}
            className={activeTab === i ? "nav-item-active" : ""}
            ></button>
            {/* <div> */}
              <Icon id={`icon-${i}`} className="nav-item" source={Object.values(label)[0]}  key={i} />
              {/* <p>{Object.keys(label)[0]}</p> */}
              </div>
         ))} 
      </div>
    </div>
  );
};

export default Footer;
