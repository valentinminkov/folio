import React from "react";
import styles from "./Project.module.scss";

export default function Project({ name, description, snapshot }) {
  return (
    <div className={styles.container}>
      <div>
        {snapshot && <img src={snapshot} alt={name} />}
        </div>
      <div className={styles.name}>
        <p>{name}</p>
      </div>
      <div className={styles.description}>
        <p>{description}</p>
      </div>
    </div>
  );
}
