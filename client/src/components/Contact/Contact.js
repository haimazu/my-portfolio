import React, { useRef } from "react";

import "./contact.css";

import { contact } from "../../data";

import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4zgia0q",
        "template_0l2bn9c",
        formRef.current,
        "uK9chrnuaSWgMWzpL"
      )
      .then(
        () => {
          alert("The message was sent successfully");
          document.forms[0].name.value = "";
          document.forms[0].email.value = "";
          document.forms[0].subject.value = "";
          document.forms[0].message.value = "";
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <section className="contact_section" id="contact">
      <div className="contact_container">
        <div className="contact_title">
          <h1>Contact me</h1>
          <h5 className="contact_subtitle">You can contact me via email</h5>
        </div>

        <hr />
        
        <div className="contact_body">
          <div className="contact_left_body">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="contact_left_body_item" key={index}>
                  <div className="contact_left_body_item_icon">{icon}</div>
                  <div>
                    <h4 className="contact_left_body_item_title">{title}</h4>
                    <p className="contact_left_body_item_subtitle">
                      {subtitle}
                    </p>
                    <p className="contact_left_body_item_description">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            className="contact_form"
            ref={formRef}
            onSubmit={sendEmail}
          >
            <div className="contact_form_first_line">
              <input
                className="input_height"
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <input
                className="input_height"
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="contact_form_second_line">
              <input
                className="input_height"
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="contact_form_third_line">
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button className="btn_md" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
