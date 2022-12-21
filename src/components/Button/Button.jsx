import classNames from "classnames/bind";
import styles from "./Button.module.scss";

export default function Button({ children, onClick = () => {}, className }) {
  return (
    <button onClick={onClick} className={classNames(styles.btn, className)}>
      {children}
    </button>
  );
}
