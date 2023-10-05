import "./Contact.css";
import { FaTelegramPlane } from "react-icons/fa";

import React, { useState } from "react";

const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(String(email).toLowerCase());
};

function Contact() {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const handleNameBlur = (e) => {
    if (!e.target.value) {
      setNameError("Full name is required");
    } else {
      setNameError("");
    }
  };

  const handleEmailBlur = (e) => {
    if (!e.target.value) {
      setEmailError("Email address is required");
    } else if (!validateEmail(e.target.value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleMessageBlur = (e) => {
    if (!e.target.value) {
      setMessageError("Message is required");
    } else {
      setMessageError("");
    }
  };

  return (
    <section className="contact__section" id="contact">
      <h1 className="heading__one">Contact Me</h1>
      <form action="">
        <div className="input__container">
          <label htmlFor="name">Full Name</label>
          <input type="text" required onBlur={handleNameBlur} />
          {nameError && <div className="error">{nameError}</div>}
        </div>
        <div className="input__container">
          <label htmlFor="name">Email Address</label>
          <input type="email" required onBlur={handleEmailBlur} />
          {emailError && <div className="error">{emailError}</div>}
        </div>
        <div className="input__container">
          <label htmlFor="name">Message</label>
          <textarea required onBlur={handleMessageBlur}></textarea>
          {messageError && <div className="error">{messageError}</div>}
        </div>
        <button>
          <span>Submit</span>
          <FaTelegramPlane />
        </button>
      </form>
    </section>
  );
}

export default Contact;
