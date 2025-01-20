import { globalIcons } from "../Assets/utilities"

const About = (props) => {
    return(
        <div
        id="about"
        className="section-block flex flex-col items-center justify-evenly"
      >
        {/* <img src={globalIcons.loganIcon} alt="" /> */}
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