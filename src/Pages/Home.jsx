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
      setHomeBackground(globalIcons.darkSmallNyBackdrop);
    } else {
      setHomeBackground(globalIcons.lightSmallNyBackdrop);
    }
  }, [currentThemeMode]);

  return (
    <div
      id="home"
      className={`section-block ${mobileHomeActive} flex flex-col`}
    >
      <div>
        <h2 className="text-custom-text">Hi, I'm</h2>
        <h1 className="text-custom-text">Logan McCann</h1>
        <LiveTypeHero text={roleOptions} speed={250} pauseDuration={500} />
      </div>
      <img src={`${homeBackground}`} alt="asd" />
    </div>
  );
};

export default Home;
