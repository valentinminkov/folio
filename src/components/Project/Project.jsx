import React from "react";
import styles from "./Project.module.scss";

export default function Project({ name, description, snapshot }) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>
        <p>{name}</p>
      </div>
      <div className={styles.descriptionContainer}>
        <p>{description}</p>
        {snapshot && <img src={snapshot} alt={name} />}
      </div>
    </div>
  );
}
