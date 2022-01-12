import React from "react";
import style from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={style.contactContainer}>
      <h2>get in touch</h2>
      <div className={style.boxContent}>
        <form>
          <div className={style.inputs}>
            <label>
              <p>Email</p>
              <input
                required
                placeholder="example@gmail.com"
                name="email"
                type="email"
              ></input>
            </label>
            <label>
              <p>Name</p>
              <input
                required
                placeholder="John Doe"
                name="name"
                type="text"
              ></input>
            </label>
          </div>
          <label>
            <p>Message</p>
            <textarea placeholder="example@gmail.com" name="message"></textarea>
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
