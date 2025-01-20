import { useEffect, useState } from "react";
import { DropDownMenu } from "./DropDownMenu";
import { sendFormData, globalIcons } from "../Assets/utilities";
import Button from "./Atoms/Button";
import Input from "./Atoms/Input";
import TextArea from "./Atoms/TextArea";

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
    console.log(formData, "form data??");
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

  useEffect(() => {
    console.log(
      name,
      "name in partnet comp, hopefully updates on blur of input component"
    );
  }, [name]);

  // const handleFormInput = (e) => {

  // }

  return (
    <>
      {!formSubmitted ? (
        <>
          <form className="contact-form flex flex-col justify-evenly">
            <Input
              id={"name-input"}
              className={`outline outline-custom-primary-outline outline-2 bg-custom-contact-bg input-${currentThemeMode}`}
              name="name"
              placeholder={"Name..."}
              value={name}
              type="text"
              stateUpdater={setName}
            />
            <Input
              id={"email-input"}
              className={`outline outline-custom-primary-outline outline-2 bg-custom-contact-bg input-${currentThemeMode}`}
              name="email"
              placeholder={"Email..."}
              value={email}
              type="email"
              stateUpdater={setEmail}
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
            />
          </form>
          <Button
            height={27.5}
            width={85}
            alignment={"flex-end"}
            type={"submit"}
            action={handleContactData}
            id="contact-chat-button"
            textContent="Send Message"
          />
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
