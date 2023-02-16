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

const dummyProjects = Array.from(Array(10).keys()).map(()=>dummyProject(generateLoremFlickrUrl()));

export default function Projects() {
  return (
    <div>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
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
