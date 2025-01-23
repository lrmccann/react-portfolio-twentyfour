import LiveTypeHero from "../Components/LiveTypeHero";
import { GlobalContext } from "../Assets/utilities";
import { useContext, useEffect, useState } from "react";
import Button from "../Components/Atoms/Button";

const Home = ({ handleContactNav, currentScreenWidth }) => {
  const { userDevice } = useContext(GlobalContext);
  const [mobileHomeActive, setMobileHomeActive] = useState();

  const navToContact = () => {
    const target = document.getElementById("contact");
    handleContactNav(5);
    target.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

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
    if (currentScreenWidth <= 1025) {
      setMobileHomeActive("mobile-section");
    } else {
      setMobileHomeActive("");
    }
  }, [currentScreenWidth]);

  return (
    <div
      id="home"
      className={`section-block ${mobileHomeActive} flex flex-col items-center`}
    >
      {/* SEO/Meta Data */}


      <h3 className="text-custom-text">Hi, I'm</h3>
      <h1 className="text-custom-text">Logan McCann</h1>
      <LiveTypeHero text={roleOptions} speed={200} />
      {userDevice === "mobile" ? (
        <Button
          height={100}
          containerPadding={"0 2.5% 0 2.5%"}
          width={100}
          containerSize={10}
          alignment={"flex-end"}
          bottom={5}
          action={navToContact}
          id="idk"
          textContent="Contact Now"
        />
      ) : (
        <div>
          <h1 className="text-custom-text">
            This is home screen els for full screen view
          </h1>
        </div>
      )}
    </div>
  );
};

export default Home;
