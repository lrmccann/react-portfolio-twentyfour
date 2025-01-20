import LiveTypeHero from "../Components/LiveTypeHero";
import { GlobalContext } from "../Assets/utilities";
import { useContext } from "react";
import Button from "../Components/Atoms/Button";


const Home = ({handleContactNav}) => {
    const { userDevice } = useContext(GlobalContext);

    console.log(handleContactNav);

    const navToContact = () => {
        const target = document.getElementById("contact");
        handleContactNav(5);
        target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

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

    return(
        <div
        id="home"
        className="section-block flex flex-col items-center"
      >
        <h3 className="text-custom-text">Hi, I'm</h3>
        <h1 className="text-custom-text">Logan McCann</h1>
        <LiveTypeHero
          text={roleOptions}
          speed={200}
        />
        {userDevice === "mobile" ? (
            <>
            <Button height={27.5} width={85} alignment={"flex-end"} action={navToContact} id="idk" textContent="Contact Now" />
            {/* <Button height={27.5} width={85} id="idk" textContent="Follow Me" /> */}
            </>
        //   <div className="hero-btn-cont flex flex-col items-center justify-evenly">
        //     <button
        //       id="hero-chat-button"
        //       className="hero-button bg-custom-button-bg-primary"
        //     >
        //       <p className="text-custom-text">AI Chatbot</p>
        //     </button>
        //     <button
        //       onClick={() => {
        //         const target = document.getElementById("contact");
        //         handleContactNav(5);
        //         target.scrollIntoView({ behavior: "smooth", block: "nearest" });
        //       }}
        //       className="hero-button bg-custom-button-bg-primary"
        //     >
        //       <p className="text-custom-text">Contact Now</p>
        //     </button>
        //   </div>
        ) : (
          <div>
            <h1 className="text-custom-text">
              This is home screen els for full screen view
            </h1>
          </div>
        )}
      </div>
    )
}

export default Home;