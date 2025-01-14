import { useState } from "react";
import { DropDownMenu } from "./DropDownMenu";
import { sendFormData, globalIcons } from "../Assets/utilities";

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
      // console.log("after send form data");
    }
  };
  return (
    <>
      {!formSubmitted ? (
        <>
          <form className="contact-form flex flex-col justify-evenly">
            <label className="flex flex-col">
              <input
                name="name"
                placeholder={"Name..."}
                className={`outline outline-custom-primary-outline outline-2 bg-custom-contact-bg input-${currentThemeMode}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <label className="flex flex-col">
              <input
                name="email"
                placeholder={"Email..."}
                className={`outline outline-custom-primary-outline outline-2 bg-custom-contact-bg input-${currentThemeMode}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <DropDownMenu
              items={selectOptions}
              buttonLabel={"Interested in..."}
              returnSelection={(optionText) => {
                setReason(optionText);
              }}
            />
            <label className="flex flex-col">
              <textarea
                name="message"
                placeholder="Message..."
                className={`outline outline-custom-primary-outline outline-2 bg-custom-contact-bg input-${currentThemeMode}`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </form>
          <div className="contact-btn-cont flex flex-col items-center justify-evenly">
            <button
              onClick={handleContactData}
              type="submit"
              id="contact-chat-button"
              className="contact-button bg-custom-button-bg-primary"
            >
              <p className="text-custom-text">Submit</p>
            </button>
          </div>
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
