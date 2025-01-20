import ContactForm from "../Components/ContactForm";


const Contact = (props) => {
    const {currentThemeMode} = props;
    return(
        <div id="contact" className="section-block flex flex-col justify-top">
        <ContactForm currentThemeMode={currentThemeMode} />
      </div>
    )
}
export default Contact;