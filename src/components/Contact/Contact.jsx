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
      <h2>get in touch</h2>
      <div className={style.boxContent}>
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
              ></input>
            </label>
          </div>
          <label>
            <p>Message</p>
            <textarea
              placeholder="example@gmail.com"
              name="message"
              onChange={handleInputChange}
            ></textarea>
            <button>
              <IoIosSend />
              Submit
            </button>
          </label>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

export const validateForm = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!/^[A-Za-z]+$/.test(input.name)) {
    errors.name = "Name must be plain text";
  }
  if (!input.email) {
    errors.email = "Email is required";
  } else if (!/^(. +)@(\S+)$/.test(input.email)) {
    errors.email = "Please write a valid email";
  }
  if (!input.message) {
    errors.message = "Message is required";
  } else if (input.message.length > 10) {
    errors.message = "Message must be at least ten words";
  }
};
