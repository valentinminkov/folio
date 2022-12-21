import styles from "./Link.module.scss";
import classNames from "classnames/bind";

const Link = ({ href, children, className }) => (
  <a className={classNames(styles.link, className)} href={href}>
    {children}
  </a>
);

export default Link;
