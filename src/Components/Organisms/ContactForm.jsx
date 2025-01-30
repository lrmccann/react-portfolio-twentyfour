import { useState } from "react";
import { DropDownMenu } from "../DropDownMenu";
import { sendFormData, globalIcons } from "../../Assets/utilities";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import TextArea from "../Atoms/TextArea";
import Buttonn from "../Atoms/Buttonn";

const ContactForm = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [reason, setReason] = useState();
  const [message, setMessage] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { currentThemeMode } = props;

  const selectOptions = [
    { optionValue: "", textValue: "" },
    { optionValue: "job", textValue: "Job Inquiry" },
    { optionValue: "project", textValue: "Project Inquiry" },
    { optionValue: "chat", textValue: "Chat" },
    { optionValue: "other", textValue: "Other" },
  ];

  const handleContactData = async () => {
    const formData = {
      Name: name,
      Email: email,
      Reason: reason,
      Message: message,
    };
    formSubmitted ? setFormSubmitted(false) : setFormSubmitted(true);
    if (formSubmitted) {
      setName("");
      setEmail("");
      setReason("");
      setReason("");
      setMessage("");
    } else {
      await sendFormData(formData);
    }
  };

  return (
    <>
      {!formSubmitted ? (
        <>
          <form
            autoComplete="off"
            className="contact-form flex flex-col justify-around"
          >
            <Input
              id={"name-input"}
              className={`outline outline-custom-primary-outline outline-2 bg-custom-contact-bg input-${currentThemeMode}`}
              name="name"
              placeholder={"Name..."}
              value={name}
              type="text"
              stateUpdater={setName}
              labelContent="Name"
            />
            <Input
              id={"email-input"}
              className={`outline outline-custom-primary-outline outline-2 bg-custom-contact-bg input-${currentThemeMode}`}
              name="email"
              placeholder={"Email..."}
              value={email}
              type="email"
              stateUpdater={setEmail}
              labelContent="Email"
            />
            <DropDownMenu
              items={selectOptions}
              buttonLabel={"Interested in..."}
              returnSelection={(optionText) => {
                setReason(optionText);
              }}
            />
            <TextArea
              id="message-text-area"
              className={`outline outline-custom-primary-outline outline-2 bg-custom-contact-bg input-${currentThemeMode}`}
              name="message"
              placeholder="Message..."
              value={message}
              type="text"
              stateUpdater={setMessage}
              labelContent="Message"
              borderRadius={"1.1em"}
            />
            <div className="contact-btn-cont">
              <Buttonn
                id={`contact-chat-btn`}
                className="bg-custom-button-bg-primary text-custom-text outline outline-1 outline-custom-primary-outline"
                height={100}
                width={100}
                textContent={"Send Message"}
                action={() => {
                  handleContactData();
                }}
                type={"submit"}
                borderRadius={"0.5em"}
                ariaLabel={"Send Form Information To Database"}
              />
            </div>
          </form>
        </>
      ) : (
        <div className="contact-confirmation-container flex flex-col items-center justify-center">
          <p>Message Received</p>
          <img
            src={`${globalIcons.checkMarkIcon}`}
            alt="Green Checkmark Confirmation Icon"
          />
          <div className="contact-btn-cont flex flex-col items-center justify-evenly">
            <button
              id="contact-chat-button"
              className="contact-button"
              onClick={handleContactData}
            >
              <p>Send Another?</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
