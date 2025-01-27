import { globalIcons } from "../Assets/utilities";
import { useState, useEffect } from "react";
import Button from "../Components/Atoms/Button";
import Icon from "../Components/Atoms/Icon";

const About = ({currentScreenWidth, handleContactNav}) => {

  const [mobileHomeActive, setMobileHomeActive] = useState();

  useEffect(() => {
    if(currentScreenWidth <= 1025){
      setMobileHomeActive("mobile-section");
    }else{
      setMobileHomeActive("");
    }
  }, [currentScreenWidth]);


  const navToContact = () => {
    const target = document.getElementById("contact");
    handleContactNav(5);
    target.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

    return(
        <div
        id="about"
        className={`section-block ${mobileHomeActive} flex flex-col items-center justify-center`}
      >
        {/* <div className={`about-cont flex flex-col items-center justify-evenly`}> */}
        <div className="half-bg" style={{backgroundImage: `url(${globalIcons.darkSmallNyBackdrop})`, backgroundSize: "cover"}}></div>
        <div className="about-card flex flex-row">
        <img className="profile-pic" src={globalIcons.loganIcon} alt="" />
          <div className="about-card-right flex flex-col ">
            <h1>
              Logan M.
              </h1>
              <h2>
              Sr. Software Engineer at Webex by Cisco
              </h2>
            <Icon className="about-webex-icon" source={`${globalIcons.webexIcon}`} />
          </div>
        </div>
        <div className="about-btn-cont flex flex-row">
          <button className="text-custom-text about-contact-btn">
            Contact Now
          </button>
          <button className="text-custom-text about-follow-btn">
            Follow Me
          </button>
        </div>
        <h1 className="text-custom-text">About</h1>
        <p className="text-custom-text">
          Highly adaptable and detail-oriented web developer with extensive
          background in various coding languages, building responsive websites
          from front to back, and developing mobile applications. Specializes in
          JSX and CSS. Poised to contribute creative problem solving.
          {/* Poised to contribute creative problem solving techniques,
          excellent interpersonal skills, and time management. */}
        </p>
        <h1>Profeciencies</h1>
        {/* </div> */}
        {/* <Button
          height={100}
          containerPadding={"0 2.5% 0 2.5%"}
          width={100}
          containerSize={10}
          alignment={"flex-end"}
          bottom={5}
          action={navToContact}
          id="idk"
          textContent="Contact Now"
        /> */}
        </div>
    )
}

export default About;