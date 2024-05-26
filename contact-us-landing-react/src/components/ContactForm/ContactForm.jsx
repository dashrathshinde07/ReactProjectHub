import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import contact_img from "../../assets/contact.svg";

const ContactForm = () => {
  return (
    <>
      <section className={`${styles.container}`}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>
            <Button
              text="Via Support Chat"
              icon={<MdMessage fontSize="24px" />}
            />
            <Button text="Via Call" icon={<FaPhoneAlt fontSize="24px" />} />
          </div>

          <Button
            isOutline={true}
            text="Via Email"
            icon={<HiMail fontSize="24px" />}
          />

          <form>
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
