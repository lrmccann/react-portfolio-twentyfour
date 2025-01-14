import { useContext, useEffect, useState } from "react";
import { globalIcons, navigationIcons } from "../Assets/utilities";
import { GlobalContext } from "../Assets/Utilities/ThemeContext";
import ToggleSwitch from "./ToggleSwitch";

const Header = (props) => {
  const { userDevice, upperCaseSectionsArr, lowerCaseSectionsArr } =
    useContext(GlobalContext);

  const { tabLocation, handleMenuNavigation, currentThemeMode, themeChanged } =
    props;

  const [navIcon, setNavIcon] = useState();
  const [lastLocation, setLastLocation] = useState(tabLocation);
  const [navOpen, setNavOpen] = useState(false);
  const [value, setValue] = useState(false);

  const headerOptions = {
    logoClass: userDevice === "mobile" ? "icon-mobile" : "icon-full",
    headerLogo:
      userDevice === "mobile"
        ? globalIcons.lrmLogoMobile
        : globalIcons.lrmLogoLarge,
  };

  const navItemsFinalArr = [];

  upperCaseSectionsArr.forEach(() => {
    
    // console.log("for each")
  })

  useEffect(() => {
    if (currentThemeMode === "dark" && !navOpen) {
      setNavIcon(globalIcons.darkHamburgerIconBlack);
    } else if (currentThemeMode === "light" && !navOpen) {
      setNavIcon(globalIcons.hamburgerIconBlack);
    }
    if (tabLocation !== lastLocation) {
      setLastLocation(tabLocation);
    }
  }, [lastLocation, tabLocation, currentThemeMode, navOpen]);

  const openNav = (e) => {
    e.preventDefault();
    if (!navOpen) {
      if (currentThemeMode === "dark") {
        setNavIcon(globalIcons.darkModeCloseIcon);
      } else if (currentThemeMode === "light") {
        setNavIcon(globalIcons.closeIcon);
      }
      setNavOpen(true);
    } else if (navOpen) {
      if (currentThemeMode === "dark") {
        setNavIcon(globalIcons.darkHamburgerIconBlack);
      } else if (currentThemeMode === "light") {
        setNavIcon(globalIcons.hamburgerIconBlack);
      }
      setNavOpen(false);
    }
  };

  const navAction = (e) => {
    e.preventDefault();
    const target = document.getElementById(lowerCaseSectionsArr[e.target.id]);
    if (target) {
      handleMenuNavigation(target);
      if (lastLocation > tabLocation) {
        target.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const socialNav = (socialUrl) => {};

  return (
    <main className="header flex flex-row justify-between bg-custom-secondary-background">
      <img
        className={`${headerOptions.logoClass}`}
        src={
          currentThemeMode === "dark"
            ? `${globalIcons.lrmLogoMobileDark}`
            : `${headerOptions.headerLogo}`
        }
        alt="Custom Icon With Logan R McCann Curved At The Top, The Initials LRM In The Center, And Developer Centered At The Bottom"
      />
      {userDevice !== "desktop" ? (
        <div
          className={`mobile-nav-container flex flex-row`}
          // ${tabLocation === 0 ? "flex-justify-end" : "justify-between"}`}
        >
          <div className="mobile-button-container flex flex-row justify-between">
            <ToggleSwitch
              isOn={value}
              onColor="black"
              currentThemeMode={currentThemeMode}
              handleToggle={() => {
                themeChanged();
                if (!navOpen) {
                  if (currentThemeMode === "dark") {
                    setNavIcon(globalIcons.darkHamburgerIconBlack);
                  } else if (currentThemeMode === "light") {
                    setNavIcon(globalIcons.hamburgerIconBlack);
                  }
                }
                setValue(!value);
              }}
            />
            {/* <button 
            onClick={() => {themeChanged()}}
            className="flex flex-col justify-center items-center">
              <img src={`${currentThemeMode === "light" ? globalIcons.lightModeMoonIcon : globalIcons.darkModeMoonIcon }`} alt="" />
            </button> */}
            {/* </div> */}
            {/* {tabLocation !== 0 && (
            <div className="mobile-chat-bar">
              <button className="flex-col flx-center flx-align-center">
                <img src={`${globalIcons.chatbotIcon}`} alt="" />
              </button>
            </div>
          )} */}
            <button
              onClick={(e) => {
                openNav(e);
              }}
              className={`mobile-menu-button menu-btn-${currentThemeMode} flex flex-row items-center justify-center`}
            >
              <img src={navIcon} alt="Hamburger Icon To Open Page Navigation" />
            </button>
          </div>
          {navOpen && (
            <div className="mobile-full-nav flex flex-col justify-between bg-custom-primary-background">
              <ul className="text-custom-text">
                {upperCaseSectionsArr.map((portfolioSection, index) => {
                  return (
                    <>
                    {/* <img src={} */}
                    <li
                      id={index}
                      onClick={(e) => {
                        navAction(e);
                      }}
                      className={`${tabLocation === index ? "active" : ""} `}
                      key={index}
                    >
                      {portfolioSection}
                    </li>
                    </>
                  );
                })}
              </ul>
              <div className="social-container">
                {/* <p>Follow Me On Socials:</p> */}
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
        </div>
            </div>
          )}
        </div>
      ) : (
        <div className="full-nav-container">
          <ul>
            {upperCaseSectionsArr.map((portfolioSection, index) => {
              return (
                <li
                  onClick={(e) => {
                    navAction(e);
                  }}
                  key={index}
                  id={index}
                  className={tabLocation === index ? "active" : ""}
                >
                  {portfolioSection}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Header;
