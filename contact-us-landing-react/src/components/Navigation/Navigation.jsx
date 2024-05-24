import frame_img from "../../assets/frame_img.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
  console.log(styles);
  return (
    <>
      <nav className={`${styles.navigation} container`}>
        <div className="logo">
          <img src={frame_img} alt="do some coding logo" />
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
