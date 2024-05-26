import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";

const Button = ({ isOutline, icon, text }) => {
  // console.log(props)

  return (
    <>
      <button
        className={`${isOutline ? styles.outline_btn : styles.primary_btn}`}
      >
        {icon}
        {text}
      </button>
    </>
  );
};

export default Button;
