import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import contact_img from "../../assets/contact.svg";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [text, setText] = useState(" ");

  const onViaCallSubmit = () => {
    console.log("I am from call");
  };

  const onSubmitHandle = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    console.log(name, email, text);
  };

  return (
    <>
      <section className={`${styles.container}`}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="Via Support Chat"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button
              onClick={onViaCallSubmit}
              text="Via Call"
              icon={<FaPhoneAlt fontSize="24px" />}
            />
          </div>

          <Button
            isOutline={true}
            text="Via Email"
            icon={<HiMail fontSize="24px" />}
          />

          <form onSubmit={onSubmitHandle}>
            <div className={styles.form_controler}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" />
            </div>
            <div className={styles.form_controler}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" />
            </div>
            <div className={styles.form_controler}>
              <label htmlFor="name">Text</label>
              <textarea name="text" rows="8" />
            </div>

            <div style={{ display: "flex", justifyContent: "end" }}>
              <Button text="Submit" />
            </div>
            <div>{name + "" + email + " " + text}</div>
          </form>
        </div>
        <div className={`${styles.contact_form}`}>
          <img src={contact_img} alt="" />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
