import React from "react";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1> Building Better Online Experiences </h1>
      <div>
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi, I'm Valentin Minkov, a passionate web developer with a focus on
          crafting engaging and responsive websites.
        </p>

        <p>
          My expertise in web development spans both front-end and full-stack
          solutions, and I'm committed to building custom web solutions that
          align with clients' needs and goals. From concept to creation, I'm
          dedicated to creating better online experiences that resonate with
          audiences.
        </p>

        <p>
          If you want to learn more about me and my work, be sure to check out
          my "About" section. There, you'll find more information about my
          background, experience, and approach to web development.
        </p>

        <p>
          And if you're interested in seeing some of my recent projects and the
          kind of work I can do, head over to my "Projects" section. You'll find
          a selection of projects that showcase my skills and expertise in
          creating intuitive, user-friendly websites.
        </p>

        <p>
          Thanks for stopping by, and I look forward to connecting with you
          soon!
        </p>
      </div>
    </div>
  );
}
