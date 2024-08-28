import React from "react";

import "./Projects.scss";

import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={"project_container"} id="projects">
      <h2 className={"project_title"}>Projects</h2>
      <div className={"projects"}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
