import Buttonn from "../../Components/Atoms/Buttonn";

const AboutDesktop = ({pageProps}) => {
  console.log(pageProps, "page props")
  return (
    <div className="about-desktop-container">
      <div className="about-desktop-left flex flex-col justify-center text-custom-text">
        <span >
          <h1>Logan McCann</h1>
          <h2>Sr. Front-End Developer</h2>
        </span>
        <p>
          Highly adaptable and detail-oriented web developer with extensive
          background in various coding languages, building responsive websites
          from front to back, and developing mobile applications.
        </p>
        <div className="about-desktop-btn-container flex flex-row">
        <Buttonn
              id={"about-nav-contact"}
              className="bg-custom-button-bg-primary text-custom-text outline outline-1 outline-custom-primary-outline"
              height={100}
              width={47.5}
              textContent={"Contact Now"}
              action={pageProps.navToContact}
              type={"button"}
              borderRadius={"2em"}
              ariaLabel={"Navigate To Contact Form"}
            />
            <Buttonn
              id={"about-resume-download"}
              className="bg-custom-button-bg-primary text-custom-text outline outline-1 outline-custom-primary-outline"
              height={100}
              width={47.5}
              textContent={"Download Resume"}
              action={pageProps.download}
              type={"button"}
              borderRadius={"2em"}
              ariaLabel={"Download Full Resume"}
            />
        </div>
         <div className="industry-icon-container">
          <h2>Industry Experience</h2>
          <ul className="flex flex-row">
            {pageProps.industryArr.map((industryObj, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-evenly"
              >
                <img src={`${industryObj.icon}`} alt={`${industryObj.text}`} />
                <p>{industryObj.text}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="proficiencies-container">
          <h2>Proficiencies</h2>
          <ul className="flex flex-row">
            {pageProps.topSkillsArr.map((skillItem, index) => (
              <li className="flex flex-col items-center justify-center">
                <img
                  key={index}
                  src={`${skillItem.icon}`}
                  alt={`${skillItem.text}`}
                />
                <p>{skillItem.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="about-desktop-right flex flex-col justify-end">
        <img id="about-desktop-vector" src={pageProps.vector} alt="vector" />
      <img id="about-bio-pic" src={pageProps.bioPic} alt="something" />
      </div>
    </div>
  );
};

export default AboutDesktop;
