import LiveTypeHero from "../Components/LiveTypeHero";
import { GlobalContext } from "../Assets/utilities";
import { useContext } from "react";


const Home = (props) => {

    const {handleContactNav} = props;

    const { userDevice } = useContext(GlobalContext);

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
          // text="Hi, I'm Logan McCann. A Front-End Developer With 6+ Years of Experience Building Scalable, User-Friendly Applications. Learn More About My Experience And Proficiencies By Exploring My Portfolio Or Speaking With My ChatBot"
          speed={200}
        />
        {userDevice === "mobile" ? (
          <div className="hero-btn-cont flex flex-col items-center justify-evenly">
            <button
              id="hero-chat-button"
              className="hero-button bg-custom-button-bg-primary"
            >
              <p className="text-custom-text">AI Chatbot</p>
            </button>
            <button
              onClick={() => {
                const target = document.getElementById("contact");
                handleContactNav(5);
                target.scrollIntoView({ behavior: "smooth", block: "nearest" });
              }}
              className="hero-button bg-custom-button-bg-primary"
            >
              <p className="text-custom-text">Contact Now</p>
            </button>
          </div>
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