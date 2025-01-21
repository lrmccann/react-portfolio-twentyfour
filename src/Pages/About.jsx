import { globalIcons } from "../Assets/utilities";
import { useState, useEffect } from "react";

const About = ({currentScreenWidth}) => {

  const [mobileHomeActive, setMobileHomeActive] = useState();

  useEffect(() => {
    if(currentScreenWidth <= 1025){
      setMobileHomeActive("mobile-section");
    }else{
      setMobileHomeActive("");
    }
  }, [currentScreenWidth])

    return(
        <div
        id="about"
        className={`section-block ${mobileHomeActive} flex flex-col items-center justify-evenly`}
      >
        <img src={globalIcons.loganIcon} alt="" />
        <p className="text-custom-text">
          Highly adaptable and detail-oriented web developer with extensive
          background in various coding languages, building responsive websites
          from front to back, and developing mobile applications. Specializes in
          JSX and CSS. Poised to contribute creative problem solving techniques,
          excellent interpersonal skills, and time management.
        </p>
        </div>
    )
}

export default About;