import React from "react";
import Router from "./router";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <Router />
    </div>
  );
}

export default App;
