import { useContext, useEffect, useState } from "react";
import ContactForm from "../Components/Organisms/ContactForm";
import { GlobalContext } from "../Assets/utilities";

const Contact = ({ currentScreenWidth }) => {
  const { themeMode, userDevice } = useContext(GlobalContext);

  const [mobileHomeActive, setMobileHomeActive] = useState();

  useEffect(() => {
    if (currentScreenWidth <= 1024 && (userDevice === 'tablet' || userDevice === 'mobile')) {
      setMobileHomeActive("mobile-section");
    } else {
      setMobileHomeActive("full-section");
    }
  }, [currentScreenWidth, userDevice]);

  return (
    <div id="contact" className={`section-block ${mobileHomeActive}`}>
      <div className="contact-form-container flex flex-col justify-between">
        <h1 className="text-custom-text">Get In Touch!</h1>
        <ContactForm currentThemeMode={themeMode} />
      </div>
    </div>
  );
};
export default Contact;
