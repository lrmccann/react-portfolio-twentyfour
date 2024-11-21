import { useContext, useEffect, useState } from "react";
import {
  iconLarge,
  iconMobile,
  iconHamburger,
  iconClose,
} from "../Assets/images";
import { PortContext } from "../Assets/utilities";
import chatBotIcon from "../Assets/Images/chatbot-icon.png";

const Header = (props) => {
  const { tabLocation, getTabLocation } = useContext(PortContext);

  const { scrolledHome, lowerCaseSectionsArr, upperCaseSectionsArr, isMobile } =
    props;

  const [headerLogo, setHeaderLogo] = useState("");
  const [logoClass, setLogoClass] = useState("");
  const [navIcon, setNavIcon] = useState(iconHamburger);
  // const [currentTab, setCurrentTab] = useState("Home");

  const [lastLocation, setLastLocation] = useState(0);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setLastLocation(tabLocation);
    // setCurrentTab(upperCaseSectionsArr[tabLocation])
    if (isMobile) {
      setLogoClass("icon-mobile");
      setHeaderLogo(iconMobile);
    } else {
      setLogoClass("icon-full");
      setHeaderLogo(iconLarge);
    }
  }, [isMobile, tabLocation]);

  const openNav = (e) => {
    e.preventDefault();
    if (!navOpen) {
      setNavIcon(iconClose);
      setNavOpen(true);
    } else if (navOpen) {
      setNavIcon(iconHamburger);
      setNavOpen(false);
    }
  };

  const navAction = (e) => {
    e.preventDefault();
    getTabLocation(e.target.id);
    const target = document.getElementById(lowerCaseSectionsArr[e.target.id]);
    if (target) {
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
        className={`${logoClass}`}
        src={`${headerLogo}`}
        alt="Custom Icon With Logan R McCann Curved At The Top, The Initials LRM In The Center, And Developer Centered At The Bottom"
      />
      {isMobile ? (
        <div className="mobile-nav-container flx-rw flx-end">
          {!scrolledHome && (
            //   <div>
            //     <h1>
            //       {currentTab}
            //     </h1>
            // </div>
            <div className="mobile-chat-bar">
              <button className="flx-row flx-center flx-align-center">
                <img src={chatBotIcon} alt="" />
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
