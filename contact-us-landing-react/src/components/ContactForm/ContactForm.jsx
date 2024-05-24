import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <>
      <section className={`${styles.container}`}>
        <div>
          <Button/>
        </div>
        <div className={`${styles.contact_form}`}>
          <img src={`${styles.contact_image}`} alt="" />
        </div>
      </section>
    </>
  );
};

export default ContactForm;
