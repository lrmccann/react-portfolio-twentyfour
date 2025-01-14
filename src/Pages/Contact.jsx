import ContactForm from "../Components/ContactForm";


const Contact = (props) => {
    const {sectionName, currentThemeMode} = props;
    return(
        <div id={sectionName} className="section-block">
        <ContactForm currentThemeMode={currentThemeMode} />
      </div>
    )
}
export default Contact;