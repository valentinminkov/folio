import React from "react";
import Image from "../../components/Image/Image";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div>
      <div className={styles.introductionContainer}>
        <Image src={"/images/me.jpeg"} alt="me" className={styles.portrait} />
        <h1>Skills and Expertise:</h1>
        <p>
          As a web developer, I specialize in several areas of expertise and
          have gained proficiency in a range of technologies. My main skills, in
          decreasing order of expertise level, include:
        </p>
        <ul>
          <li>
            <strong>React:</strong> I have extensive experience building modern,
            dynamic user interfaces using the React library. From simple
            components to complex web applications, I'm comfortable working with
            React to create custom solutions that meet clients' needs.
          </li>
          <li>
            <strong>JavaScript:</strong> I'm proficient in using JavaScript to
            create interactive and responsive web pages. I'm also skilled in
            working with popular frameworks and libraries, such as jQuery and
            Vue.js.
          </li>
          <li>
            <strong>TypeScript:</strong> I have experience using TypeScript to
            build scalable, maintainable web applications with improved type
            safety.
          </li>
          <li>
            <strong>Angular:</strong> I have worked on several projects using
            Angular, a popular framework for building dynamic single-page
            applications.
          </li>
          <li>
            <strong>Node.js:</strong> I have experience building server-side
            applications using Node.js, and I'm comfortable working with popular
            frameworks and libraries, such as Express and Socket.io.
          </li>
          <li>
            <strong>HTML:</strong> I have extensive knowledge of HTML and its
            latest specifications, including HTML5.
          </li>
          <li>
            <strong>SCSS:</strong> I'm skilled in using SCSS to create flexible
            and reusable styles for web pages and applications.
          </li>
          <li>
            <strong>SQL:</strong> I have experience working with relational
            databases and writing complex SQL queries to extract, transform, and
            analyze data.
          </li>
          <li>
            <strong>Golang:</strong> I'm comfortable working with Go, a powerful
            and efficient programming language commonly used for building web
            applications.
          </li>
        </ul>
        <p>
          In addition, I'm also comfortable with native development and enjoy
          picking up new languages and frameworks as needed to meet the needs of
          each project.
        </p>
      </div>
    </div>
  );
}
