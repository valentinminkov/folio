import React from "react";
import styles from "./Projects.module.scss";

const dummyProjects = [
  {
    name: "Test project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum repellat dolore, incidunt reiciendis minus sit expedita dicta! Quisquam rem voluptatibus similique omnis ipsa delectus repellendus velit distinctio. Unde, impedit?",
  },
  {
    name: "Test project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum repellat dolore, incidunt reiciendis minus sit expedita dicta! Quisquam rem voluptatibus similique omnis ipsa delectus repellendus velit distinctio. Unde, impedit?",
  },
  {
    name: "Test project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dolorum repellat dolore, incidunt reiciendis minus sit expedita dicta! Quisquam rem voluptatibus similique omnis ipsa delectus repellendus velit distinctio. Unde, impedit?",
  },
];
export default function Projects() {
  return (
    <div>
      <h3>Some of the projects I have worked on.</h3>
      {dummyProjects.map(({ name, description }, i) => (
        <div className={styles.project}>
          <p>
            {name} {i+1}
          </p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}
