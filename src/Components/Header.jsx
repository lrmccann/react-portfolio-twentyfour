import { useContext, useEffect, useState, useRef } from "react";
import { globalIcons, navigationIcons } from "../Assets/utilities";
import { GlobalContext } from "../Assets/Utilities/ThemeContext";
import ToggleSwitch from "./ToggleSwitch";

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

const Header = (props) => {
  const {
    userDevice,
    upperCaseSectionsArr,
    lowerCaseSectionsArr,
    // currentTab,
    themeMode,
    setThemeMode,
  } = useContext(GlobalContext);

  const { handleMenuNavigation, activeTab } = props;

  const [navIcon, setNavIcon] = useState();
  const prevTab = usePrevious(activeTab);
  const [navOpen, setNavOpen] = useState(false);
  const [value, setValue] = useState();
  const [sliderColor, setSliderColor] = useState();

  const headerOptions = {
    logoClass: userDevice === "mobile" ? "icon-mobile" : "icon-full",
    headerLogo:
      userDevice === "mobile"
        ? globalIcons.lrmLogoMobile
        : globalIcons.lrmLogoLarge,
  };

  useEffect(() => {
    if (themeMode === "dark" && !navOpen) {
      setNavIcon(globalIcons.darkHamburgerIconBlack);
    } else if (themeMode === "light" && !navOpen) {
      setNavIcon(globalIcons.hamburgerIconBlack);
    }
  }, [themeMode, navOpen]);

  useEffect(() => {
    if(themeMode === "dark"){
      setSliderColor("white");
      setValue(true);
    }else{
      setSliderColor("red");
      setValue(false);
    }
  }, [themeMode])

  const openNav = (e) => {
    e.preventDefault();
    if (!navOpen) {
      if (themeMode === "dark") {
        setNavIcon(globalIcons.darkModeCloseIcon);
      } else if (themeMode === "light") {
        setNavIcon(globalIcons.closeIcon);
      }
      setNavOpen(true);
    } else if (navOpen) {
      if (themeMode === "dark") {
        setNavIcon(globalIcons.darkHamburgerIconBlack);
      } else if (themeMode === "light") {
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
      if (prevTab > activeTab) {
        target.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const socialNav = (socialUrl) => {};

  return (
    <main className="header ">
      {/* <img
        className={`${headerOptions.logoClass}`}
        src={
          themeMode === "dark"
            ? `${globalIcons.lrmLogoMobileDark}`
            : `${headerOptions.headerLogo}`
        }
        alt="Custom Icon With Logan R McCann Curved At The Top, The Initials LRM In The Center, And Developer Centered At The Bottom"
      /> */}
      {userDevice !== "desktop" ? (
        <div className={`mobile-nav-container `}>
          <div className="mobile-button-container flex flex-row items-center justify-between">
          <button
            id="menu-button"
              onClick={(e) => {
                openNav(e);
              }}
              className={`mobile-menu-button menu-btn-${themeMode} flex flex-row items-center justify-center`}
            >
              <img src={navIcon} alt="Hamburger Icon To Open Page Navigation" />
            </button>
            {/* <button
            id="theme-button"
            onClick={() => {
              setThemeMode(themeMode === "light" ? "dark" : "light");
                if (!navOpen) {
                  if (themeMode === "dark") {
                    setNavIcon(globalIcons.darkHamburgerIconBlack);
                  } else if (themeMode === "light") {
                    setNavIcon(globalIcons.hamburgerIconBlack);
                  }
                }
                setValue(!value);
            }}
            >
              <img src={themeMode === "dark" ? `${globalIcons.moonOne}` : `${globalIcons.sunOne}`} alt="theme-switcher" />
            </button> */}
            <ToggleSwitch
              isOn={value}
              themeMode={themeMode}
              handleToggle={() => {
                setThemeMode(themeMode === "light" ? "dark" : "light");
                if (!navOpen) {
                  if (themeMode === "dark") {
                    setNavIcon(globalIcons.darkHamburgerIconBlack);
                  } else if (themeMode === "light") {
                    setNavIcon(globalIcons.hamburgerIconBlack);
                  }
                }
                setValue(!value);
              }}
              onColor={`${sliderColor}`}
            />
          </div>
          {navOpen && (
            <div className="mobile-full-nav flex flex-col justify-between bg-custom-primary-background">
              <ul className="text-custom-text">
                {upperCaseSectionsArr.map((portfolioSection, index) => {
                  return (
                      <li
                        id={index}
                        onClick={(e) => {
                          navAction(e);
                        }}
                        className={`${activeTab === index ? "active" : ""} `}
                        key={index}
                      >
                        {portfolioSection}
                      </li>
                  );
                })}
              </ul>
              <div className="social-container">
                <button
                  onClick={() => {
                    socialNav("https://www.linkedin.com/in/logan-mccann/");
                  }}
                >
                  <img
                    src={
                      themeMode === "dark"
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
                      themeMode === "dark"
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
                      themeMode === "dark"
                        ? `${globalIcons.blueSkyIconDark}`
                        : `${globalIcons.blueskyIcon}`
                    }
                    className={themeMode === "dark" ? "bluesky-active" : " "}
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
                  className={activeTab === index ? "active" : ""}
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
