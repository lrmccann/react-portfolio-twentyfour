import { useState } from "react";
import { DropDownMenu } from "./DropDownMenu";
import {sendFormData, globalIcons} from '../Assets/utilities';

const ContactForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [reason, setReason] = useState();
  const [message, setMessage] = useState();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const selectOptions = [
    { optionValue: "", textValue: "" },
    { optionValue: "job", textValue: "Job Inquiry" },
    { optionValue: "project", textValue: "Project Inquiry" },
    { optionValue: "chat", textValue: "Chat" },
    { optionValue: "other", textValue: "Other" },
  ];

  const handleContactData = async () => {
    // let date = new Date();
    const formData = {
      Name: name,
      Email: email,
      Reason: reason,
      Message: message,
    //   Data: date.toISOString()
    };
    formSubmitted ? setFormSubmitted(false) : setFormSubmitted(true);
    if(formSubmitted){
        setName(''); setEmail(''); setReason(''); setReason(''); setMessage('');
    }else{
        await sendFormData(formData);
        console.log("after sen form data")
    }
  };

  return (
    <>
      {!formSubmitted ? (
        <>
          <form className="contact-form flx-col flx-spc-evenly">
            <label className="flx-col">
              <input
                name="name"
                placeholder={"Name..."}
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </label>
            <label className="flx-col">
              <input
                name="email"
                placeholder={"Email..."}
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
            <label className="flx-col">
              <textarea
                name="message"
                placeholder="Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </label>
          </form>
          <div className="contact-btn-cont flx-col flx-align-center flx-spc-evenly">
            <button
              onClick={handleContactData}
              type="submit"
              id="contact-chat-button"
              className="contact-button"
            >
              <p>Submit</p>
            </button>
          </div>
        </>
      ): (
        <div className="contact-confirmation-container flx-col flx-align-center flx-center">
            {/* <span> */}
            <p>Message Received</p>
            <img src={`${globalIcons.checkMarkIcon}`} alt="Green Checkmark Confirmation Icon"/>
            {/* </span> */}
            <div className="contact-btn-cont flx-col flx-align-center flx-spc-evenly">
            <button
              id="contact-chat-button"
              className="contact-button"
              onClick={handleContactData}
            >
                <p>Send Another?</p>
            </button>
          </div>
        </div>
      )
    }
    </>
  );
};

export default ContactForm;
