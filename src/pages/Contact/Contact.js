import React from "react";
import styles from "./Contact.module.scss";
import Button from "../../components/Button/Button";

export default function Contact() {
  return (
    <div>
      <p>Get in touch!</p>
      <div className={styles.contactContainer}>
        <textarea rows="4" cols="50"></textarea>
        <Button
        className={styles.btn}
          onClick={() => {
            console.log("click");
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}
