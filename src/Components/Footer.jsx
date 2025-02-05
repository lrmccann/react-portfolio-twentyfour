import { useState, useContext, useRef, useEffect } from "react";
import { navigationIcons } from "../Assets/utilities";
import Icon from "./Atoms/Icon";
import { GlobalContext } from "../Assets/utilities";
import NavIcon from "./Atoms/NavIcon";
import { HomeIcon, UserIcon, SkillIcon, ResumeIcon, ProjectIcon, ContactIcon } from "../Assets/navigation-icons";
import Buttonn from "./Atoms/Buttonn";
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
  const { lowerCaseSectionsArr, themeMode } = useContext(GlobalContext);
  const [navLabels, setNavLabels] = useState([]);

  useEffect(() => {
    if(themeMode === "light"){
      setNavLabels([
        {"Home": `${navigationIcons.homeIconLightTheme}`},
        {"About": `${navigationIcons.aboutIconLightTheme}`},
        {"Skills": `${navigationIcons.skillIconLightTheme}`},
        {"Projects": `${navigationIcons.experienceIconLightTheme}`},
        {"Resume": `${navigationIcons.projectIconLightTheme}`},
        {"Contact": `${navigationIcons.contactIconLightTheme}`},
      ])

    }else if(themeMode === "dark"){
      setNavLabels([
        {"Home": `${navigationIcons.homeIconDarkTheme}`},
        {"About": `${navigationIcons.aboutIconDarkTheme}`},
        {"Skills": `${navigationIcons.skillIconDarkTheme}`},
        {"Projects": `${navigationIcons.experienceIconDarkTheme}`},
        {"Resume": `${navigationIcons.projectIconDarkTheme}`},
        {"Contact": `${navigationIcons.contactIconDarkTheme}`},
      ])
    }
  }, [themeMode])

  // const buttonLabels = [
  //   {"Home": `${navigationIcons.homeIconDarkTheme}`},
  //   {"About": `${navigationIcons.aboutIconDarkTheme}`},
  //   {"Skills": `${navigationIcons.skillIconDarkTheme}`},
  //   {"Projects": `${navigationIcons.experienceIconDarkTheme}`},
  //   {"Resume": `${navigationIcons.projectIconDarkTheme}`},
  //   {"Contact": `${navigationIcons.contactIconDarkTheme}`},
  // ];
  

  // const buttonLabels = [
  //   {"Home": HomeIcon},
  //   {"About": UserIcon},
  //   {"Skills": SkillIcon},
  //   {"Resume": ResumeIcon},
  //   {"Projects": ProjectIcon},
  //   {"Contact": ContactIcon}
  // ];

  const navAction = (e) => {
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
    <div id="footer-main" className={`footer-main flex flex-row items-center justify-center  bg-custom-primary-background`}>
      <div className={`footer-bar flex flex-row items-center justify-between ${themeMode === "light" ? "bg-custom-secondary-background outline outline-1 outline-custom-primary-outline" : ""}`}>
        {navLabels.map((label, i) => (
        <div className="footer-button">
          <Buttonn
              id={i}
              key={`footer-key-${i}`}
              // className='bg-custom-button-bg-primary text-custom-text'
              className={`${activeTab === i ? "nav-item-active" : ""}`}   
              height={100}
              width={100}
              // textContent={"Visit Site"}
              action={(e) => {navAction(e)}}
              // action={() => {setThemeMode(themeMode === "light" ? "dark" : "light");}}
              type={"button"}
              borderRadius={'0 0 0 0'}
              ariaLabel={"Select Additional Tool Tab"}
              imageSrc={Object.values(label)[0]}
              imageAlt={"Hamburger Menu Icon"}
          />


              </div>
         ))} 
      </div>
    </div>
  );
};

export default Footer;
