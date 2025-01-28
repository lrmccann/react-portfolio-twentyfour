import { globalIcons, industryIcons } from "../Assets/utilities";
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
        className={`section-block ${mobileHomeActive} flex flex-col items-center`}
      >
        <div id="about-top" className="about-half flex flex-col justify-end items-center">
          {/* bio pic image */}
          <img id="about-bio-pic" src={globalIcons.loganTransparent} alt="something" />
          <img id="vector-bg" src={globalIcons.vectorBg} alt="something" />
          {/* bottom overlay to show email and other stats in modal type box */}
          <div className="about-overlay flex flex-row justify-between items-end">
            {/* MAYBE ADD EMAIL ICON */}
            <p>loganrmccann@gmail.com</p>
            <ul>
              <li>Years of Experience</li>
              <li>FrontEnd: 5+ Years</li>
              <li>CMS: 5+ Years</li>
              <li>SEO: 5+ Years</li>
            </ul>
          </div>
        </div>
        <div id="about-bottom" className="about-half text-custom-text">
          <h1>Logan McCann</h1>
          <h2>Sr. Front-End Developer</h2>
          {/* Button Container for Github and LinkedIn OR Contact Now and View Socials? */}
            <p>
            Highly adaptable and detail-oriented web developer with extensive
          background in various coding languages, building responsive websites
          from front to back, and developing mobile applications. Specializes in
          JSX and CSS.
            </p>
          {/* will need to change these buttons to our react component buttons - LATER */}
          <label>Industry Experience</label>
          <ul>
            <li>
              <img src={`${industryIcons.telecomIndustryIconDarkTheme}`} alt="Telecommunication Tower" />
            </li>
            <li>
              <img src={`${industryIcons.photographyIndustryIconDarkTheme}`} alt="Camera Equipment" />
            </li>
            <li>
              <img src={`${industryIcons.outdoorWearIndustryIconDarkTheme}`} alt="Outdoor Sporting" />
            </li>
            <li>
              <img src={`${industryIcons.scubaIndustryIconDarkTheme}`} alt="Scuba Gear" />
            </li>
            <li>
              <img src={`${industryIcons.sustainabilityIndustryIconDarkTheme}`} alt="Sustainability Bulb" />
            </li>
          </ul>
          <div className="about-social-container">
            <button id="about-linkedin">
              LinkedIn
            </button>
            <button id="about-github">
              Github
            </button>
          </div>
        </div>
        {/* ////////// <div className={`about-cont flex flex-col items-center justify-evenly`}>
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
    
          Poised to contribute creative problem solving techniques,
          excellent interpersonal skills, and time management.
        </p> */}
        </div>
    )
}

export default About;