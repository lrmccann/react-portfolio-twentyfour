import { globalIcons } from "../Assets/utilities";
import { useState, useEffect } from "react";
import Button from "../Components/Atoms/Button";

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
        className={`section-block ${mobileHomeActive} flex flex-col items-center justify-top`}
      >
        <div className={`about-cont flex flex-col items-center justify-evenly`}>
        <img src={globalIcons.loganIcon} alt="" />
        <p className="text-custom-text">
          Highly adaptable and detail-oriented web developer with extensive
          background in various coding languages, building responsive websites
          from front to back, and developing mobile applications. Specializes in
          JSX and CSS. Poised to contribute creative problem solving.
          {/* Poised to contribute creative problem solving techniques,
          excellent interpersonal skills, and time management. */}
        </p>
        </div>
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
        </div>
    )
}

export default About;