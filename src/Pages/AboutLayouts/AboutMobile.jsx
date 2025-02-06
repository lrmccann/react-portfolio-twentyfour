const AboutMobile = ({pageProps}) => {
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
        <div className="about-overlay flex flex-row justify-between items-end">
          <p className="text-custom-text bg-custom-secondary-background outline outline-1 outline-custom-primary-outline">
            loganrmccann@gmail.com
          </p>
          <ul className="text-custom-text bg-custom-secondary-background outline outline-1 outline-custom-primary-outline">
            <li>Experience</li>
            <li>FrontEnd: 5+ Years</li>
            <li>CMS: 5+ Years</li>
            <li>SEO: 5+ Years</li>
          </ul>
        </div>
      </div>
      <div id="about-bottom" className="about-half text-custom-text">
        <div className="flex flex-col justify-around">
          <h1>Logan McCann</h1>
          <h2>Sr. Front-End Developer</h2>
          <p>
            Highly adaptable and detail-oriented web developer with extensive
            background in various coding languages, building responsive websites
            from front to back, and developing mobile applications.
          </p>
        </div>
        <div className="proficiencies-container">
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

export default AboutMobile;
