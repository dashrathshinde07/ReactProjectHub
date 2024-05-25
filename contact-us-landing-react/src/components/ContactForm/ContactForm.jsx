import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const ContactForm = () => {



  
  return (
    <>
      <section className={`${styles.container}`}>
        <div>
          <Button
            text="Via Support Chat"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="Via Call" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <div className={`${styles.contact_form}`}>
          <img src={`${styles.contact_image}`} alt="" />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
