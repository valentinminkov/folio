import React from "react";
import Image from "../../components/Image/Image";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div>
      <div className={styles.introductionContainer}>
        <Image src={"/images/me.jpeg"} alt="me" className={styles.portrait} />
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta
          nisi quos eum deleniti suscipit.
        </span>
      </div>
    </div>
  );
}
