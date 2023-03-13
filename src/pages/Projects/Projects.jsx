import React from "react";
import styles from "./Projects.module.scss";
import Project from "../../components/Project/Project";

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateLoremFlickrUrl = () => {
  const lock = generateRandomNumber(1, 99999);
  return `https://loremflickr.com/320/240?random=${lock}`;
};

const dummyProject = (snapshot) => {
  return {
    snapshot,
    name: "Test project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum repellat dolore, incidunt reiciendis minus sit expedita dicta! Quisquam rem voluptatibus similique omnis ipsa delectus repellendus velit distinctio. Unde, impedit?",
  };
};

const dummyProjects = Array.from(Array(10).keys()).map(() =>
  dummyProject(generateLoremFlickrUrl())
);

export default function Projects() {
  return (
    <div>
      <div>
        <h2>Check out some of my personal projects</h2>
        <p>
          I'm passionate about creating unique online experiences and love
          discussing my work with others. Whether you're interested in
          collaborating on a project or simply want to learn more about what I
          do, feel free to reach out to me.
        </p>
      </div>
      <div className={styles.container}>
        {dummyProjects.map(({ name, description, snapshot }) => (
          <Project
            key={generateRandomNumber(1, 999)}
            name={name}
            description={description}
            snapshot={snapshot}
          />
        ))}
      </div>
    </div>
  );
}
