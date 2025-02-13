import Buttonn from "../../Components/Atoms/Buttonn";
import { useContext } from "react";
import { GlobalContext } from "../../Assets/utilities";
import { skillIcons } from "../../Assets/utilities";

const SkillDesktop = () => {
  const { themeMode, userDevice } = useContext(GlobalContext);

  const sectionOptions = [
    {
      heading: "Front End Proficiencies",
      textContent:
        "Integer ac dapibus dui. In tempor, velit sit amet consectetur fermentum, sem lectus interdum quam, sed rutrum ipsum tortor at sem. Suspendisse mattis, risus ut pretium tincidunt, justo ex feugiat neque, a pellentesque leo enim nec erat.",
      heroImage: `${skillIcons.frontendHero}`,
      heroAlt: "Alt One",
    },
    {
      heading: "Back End Proficiencies",
      textContent:
        "Integer ac dapibus dui. In tempor, velit sit amet consectetur fermentum, sem lectus interdum quam, sed rutrum ipsum tortor at sem. Suspendisse mattis, risus ut pretium tincidunt, justo ex feugiat neque, a pellentesque leo enim nec erat.",
      heroImage: `${skillIcons.backendHero}`,
      heroAlt: "Alt Two",
    },
    {
      heading: "Additional Tools",
      textContent:
        "Integer ac dapibus dui. In tempor, velit sit amet consectetur fermentum, sem lectus interdum quam, sed rutrum ipsum tortor at sem. Suspendisse mattis, risus ut pretium tincidunt, justo ex feugiat neque, a pellentesque leo enim nec erat.",
      heroImage: `${skillIcons.toolsHero}`,
      heroAlt: "Alt Three",
    },
  ];

  return (
    <>
      {/* <div className="desktop-skill-container"> */}
      {sectionOptions.map((section, index) => (
        <div
          id={`skill-row-${index}`}
          className="desktop-skill-container flex flex-row justify-between"
          key={index}
          style={{
            borderTop:
              themeMode === "dark" ? "solid oldlace 1px" : "solid #1f2629 1px",
              borderBottom: index === 2 ? "solid oldlace 1px" : "",
              textAlign: index !== 1 ? "right" : ""
          }}
        >
          <img src={section.heroImage} alt={section.heroAlt} />
          <span className="text-custom-text" style={{alignItems : index !== 1 ? "end" : ""}}>
            <h3>{section.heading}</h3>
            <p>{section.textContent}</p>
            <Buttonn
              id={`proficiencies-btn-${index}`}
              className="bg-custom-button-bg-primary text-custom-text outline outline-1 outline-custom-primary-outline"
              height={25}
              width={25}
              textContent={`View ${section.heading}`}
            //   action={}
              type={"button"}
              borderRadius={"2em"}
              ariaLabel={`Open ${section.heading} Tab`}
            />
          </span>
        </div>
      ))}
      {/* </div> */}
    </>
  );
};
export default SkillDesktop;
