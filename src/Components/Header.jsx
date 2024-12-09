import { useContext, useEffect, useState } from "react";
import { globalIcons } from "../Assets/utilities";
import { GlobalContext } from "../Assets/Utilities/ThemeContext";


const Header = (props) => {
  const {userDevice, screenWidth, upperCaseSectionsArr, lowerCaseSectionsArr} = useContext(GlobalContext);

  const { tabLocation, handleMenuNavigation } = props;

  const [navIcon, setNavIcon] = useState(globalIcons.hamburgerIconBlack);
  const [lastLocation, setLastLocation] = useState(tabLocation);
  const [navOpen, setNavOpen] = useState(false);

  const headerOptions = {
    logoClass: userDevice === "mobile" ? "icon-mobile" : "icon-full",
    headerLogo: userDevice === "mobile" ? globalIcons.lrmLogoMobile : globalIcons.lrmLogoLarge
  }

  useEffect(() => {
    if(tabLocation !== lastLocation){
      setLastLocation(tabLocation);
    }
  }, [tabLocation])


  const openNav = (e) => {
    e.preventDefault();
    if (!navOpen) {
      setNavIcon(globalIcons.closeIcon);
      setNavOpen(true);
    } else if (navOpen) {
      setNavIcon(globalIcons.hamburgerIconBlack);
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

  return (
    <main className="header flx-rw flx-spc-arnd">
      <img
        className={`${headerOptions.logoClass}`}
        src={`${headerOptions.headerLogo}`}
        alt="Custom Icon With Logan R McCann Curved At The Top, The Initials LRM In The Center, And Developer Centered At The Bottom"
      />
      {userDevice !== 'desktop' ? (
        <div className="mobile-nav-container flx-rw flx-end">
          {tabLocation !== 0 && (
            <div className="mobile-chat-bar">
              <button className="flx-row flx-center flx-align-center">
                <img src={`${globalIcons.chatbotIcon}`} alt="" />
              </button>
            </div>
          )}
          <button
            onClick={(e) => {
              openNav(e);
            }}
            className="mobile-menu-button flx-rw flx-center flx-align-center"
          >
            <img src={navIcon} alt="Hamburger Icon To Open Page Navigation" />
          </button>
          {navOpen && (
            <div className="mobile-full-nav flx-col">
              <ul>
                {upperCaseSectionsArr.map((portfolioSection, index) => {
                  return (
                    <li
                      id={index}
                      onClick={(e) => {
                        navAction(e);
                      }}
                      className={tabLocation === index ? "active" : ""}
                      key={index}
                    >
                      {portfolioSection}
                    </li>
                  );
                })}
              </ul>
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
