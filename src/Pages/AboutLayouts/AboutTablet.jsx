import Buttonn from "../../Components/Atoms/Buttonn";



const AboutTablet = ({pageProps}) => {
  return (
    <>
      <div
        id="about-top"
        className="about-half flex sm:flex-col sm:justify-end sm:items-center md:flex-row md:justify-between "
      >
        {/* bio pic image */}
        <div
          className="about-top-left flex items-center"
          style={{ backgroundImage: `url(${pageProps.vector})` }}
        >
          <img id="about-bio-pic" src={pageProps.bioPic} alt="something" />
          {/* <img id="vector-bg" src={vector} alt="something" /> */}
        </div>
        <div className="about-md-text-cont flex flex-col justify-evenly text-custom-text">
          <span>
            <h1>Logan McCann</h1>
            <h2>Sr. Front-End Developer</h2>
          </span>
          <p>
            Highly adaptable and detail-oriented web developer with extensive
            background in various coding languages, building responsive websites
            from front to back, and developing mobile applications.
          </p>
          <div className="achievement-block flex flex-row justify-between">
            <span>
              <h3>7</h3>
              <p>Years of Front-End Exp</p>
            </span>

            <span>
              <h3>5</h3>
              <p>Years of SEO Exp</p>
            </span>

            <span>
              <h3>5</h3>
              <p>Years of CMS Exp</p>
            </span>
          </div>

          <div className="about-button-container flex flex-row justify-between">
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
        </div>
      </div>
      <div id="about-bottom" className="about-half text-custom-text">
        <div className="industry-icon-container">
          <h2>Industry Experience</h2>
          <ul>
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
          <ul>
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
    </>
  );
};


export default AboutTablet;