"use client";
import React, { useRef } from "react";

import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import "./Contact.css";

const Contacts = () => {
  const form = useRef();
  function validateName(event) {
    const nameInput = event.target;
    const value = nameInput.value.trim();
    if (value.length < 2) {
      // Name is too short
      nameInput.setCustomValidity("Please enter a valid name.");
      stepOne = false;
    } else {
      // Valid input, clear any error message
      nameInput.setCustomValidity("");
      stepOne = true;
    }
  }

  function validateEmail(event) {
    const emailInput = event.target;
    const email = emailInput.value.trim();
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
      emailInput.setCustomValidity("Please enter an email address.");
      stepTwo = false;
    } else if (!emailRegex.test(email)) {
      emailInput.setCustomValidity("Please enter a valid email address.");
      stepTwo = false;
    } else {
      emailInput.setCustomValidity("");
      stepTwo = true;
    }
  }

  function validateTextArea(event) {
    const textarea = event.target;
    const value = textarea.value.trim();
    if (value === "") {
      textarea.setCustomValidity("Please enter a message.");
    } else if (/^\s+$/.test(value)) {
      // Contains only spaces, display an error or perform other actions
      textarea.setCustomValidity(
        "Message cannot be empty or contain only spaces."
      );
      stepThree = false;
    } else if (value.length < 20) {
      textarea.setCustomValidity("Message cannot be too short.");
      stepThree = false;
    } else {
      // Valid input, clear any error message
      textarea.setCustomValidity("");
      stepThree = true;
    }
  }

  return (
    <div id="contact" className="secondary-class-container">
      <div className="overlay"></div>
      <div className="contacts-container-content">
        <h2>Contact</h2>
        <div className="contact-information">
          <h3>Get in touch!</h3>
          <div className="contact-icons-container">
            <div className="contact-icons">
              <a
                href="https://www.linkedin.com/in/saba-antadze-296966264/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
              <a
                href="https://github.com/chroll0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.facebook.com/sabchke"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillFacebook />
              </a>
            </div>
            <p>For more information contact now</p>
          </div>
        </div>
        <form className="contacts-inputs" ref={form}>
          <label>Your Name</label>
          <input
            type="text"
            name="user_name"
            required
            onInput={validateName}
            style={{ textTransform: "capitalize" }}
          />
          <label>Your Email</label>
          <input
            type="email"
            name="user_email"
            required
            onInput={validateEmail}
          />
          <label>Message</label>
          <textarea name="message" required onInput={validateTextArea} />
          <input type="submit" value="SEND" />
        </form>
      </div>
    </div>
  );
};

export default Contacts;
