import React, { useEffect, useRef, useState } from "react";
import style from "./Contact.module.css";
import { IoIosSend } from "react-icons/io";
import emailjs, { init } from "@emailjs/browser";
import Footer from "../Footer/Footer.jsx";

const userID = "user_a2pABavZOp4EqZ1OjEjHw";

const Contact = () => {
  const form = useRef();
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    setErrors(
      validateForm({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  useEffect(() => {
    console.log(input);
    console.log("Errors", errors);
  }, [input, errors]);

  const handleSumbit = (e) => {
    if (!input.name) return alert("You must complete the form ;)");
    e.preventDefault();

    emailjs
      .sendForm("service_lifhh2g", "template_e9pmihf", form.current, userID)
      .then(
        (result) => {
          console.log("Sucess");
        },
        (error) => {
          console.log("EmailJS", error.text);
        }
      );
  };
  return (
    <div className={style.contactContainer}>
      <div className={style.mainContainer}>
        <div className={style.boxContent}>
          <h2>get in touch</h2>
          <form ref={form} onSubmit={handleSumbit}>
            <div className={style.inputs}>
              <label>
                <p>Name</p>
                <input
                  required
                  placeholder="John Doe"
                  name="name"
                  type="text"
                  onChange={handleInputChange}
                  className={errors.name && style.errors}
                ></input>
              </label>
              <label>
                <p>Email</p>
                <input
                  required
                  placeholder="example@gmail.com"
                  name="email"
                  type="email"
                  onChange={handleInputChange}
                  className={errors.email && style.errors}
                  id={style.input}
                ></input>
              </label>
            </div>
            <label>
              <p>Message</p>
              <textarea
                placeholder="Write your message..."
                name="message"
                onChange={handleInputChange}
                className={errors.message && style.errors}
              ></textarea>
              {Object.keys(errors).length !== 0 ? (
                <button disabled className={style.btnError}>
                  Complete the form
                </button>
              ) : (
                <button>
                  <IoIosSend />
                  Submit
                </button>
              )}
            </label>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

export function validateForm(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  }
  if (!input.email) {
    errors.email = "Email is required";
  } else if (!/^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/.test(input.email)) {
    errors.email = "Please write a valid email";
  }
  if (!input.message) {
    errors.message = "Message is required";
  }
  return errors;
}
