import LiveTypeHero from "../Components/LiveTypeHero";
import { GlobalContext, globalIcons } from "../Assets/utilities";
import { useContext, useEffect, useState } from "react";

const Home = ({ currentScreenWidth, currentThemeMode }) => {
  const { userDevice } = useContext(GlobalContext);
  const [mobileHomeActive, setMobileHomeActive] = useState();
  const [homeBackground, setHomeBackground] = useState("");
  const roleOptions = [
    "Front-End Developer",
    "UI Designer",
    "SEO Specialist",
    "Team Lead",
    "Back-End Engineer",
    "CMS Expert",
    "Web Master",
    "Dog Dad",
  ];

  useEffect(() => {
    if (
      currentScreenWidth <= 1024 &&
      (userDevice === "tablet" ||
      userDevice === "mobile")
    ) {
      setMobileHomeActive("mobile-section");
    } else {
      setMobileHomeActive("full-section");
    }
  }, [currentScreenWidth, userDevice]);

  useEffect(() => {
    if (currentThemeMode === "dark") {
      if(currentScreenWidth <= 1024 && (userDevice === 'mobile' || userDevice === 'tablet')){
        setHomeBackground(globalIcons.darkSmallNyBackdrop);
      }else{
      setHomeBackground(globalIcons.darkMediumNyBackdrop);
      }
    } else {
    if (currentScreenWidth <= 1024 && (userDevice === 'mobile' || userDevice === 'tablet')){
      setHomeBackground(globalIcons.lightSmallNyBackdrop);
    }else{
      setHomeBackground(globalIcons.lightMediumBackdrop);
    }
  }
  }, [currentScreenWidth, currentThemeMode, userDevice]);

  return (
    <div
      id="home"
      className={`section-block ${mobileHomeActive} flex flex-col`}
    >
      <div>
        {/* <span> */}
        <h2 className="text-custom-text">Hi, I'm</h2>
        <h1 className="text-custom-text">Logan McCann</h1>
        <LiveTypeHero text={roleOptions} speed={250} pauseDuration={100} />
        {/* </span> */}
      </div>
      <img src={`${homeBackground}`} alt="asd" />
    </div>
  );
};

export default Home;
