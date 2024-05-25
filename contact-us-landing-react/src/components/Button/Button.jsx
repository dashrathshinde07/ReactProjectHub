import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";

const Button = (props) => {
  console.log(props)
  return (
    <>
      <button className={`${styles.primary_btn}`}>
        
        {props.icon}
        {props.text}
      </button>
    </>
  );
};

export default Button;
