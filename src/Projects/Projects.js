import React, { useEffect, useState } from "react";

import "./Projects.scss";

import projects from "../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const [position,setPosition]  =useState(0);

  // useEffect(()=>{
  //   const slider = document.querySelectorAll('.projectcard_container');
  //   slider.forEach((s,i)=>{
  //     s.style.transform = `translateX(${100*(i-position)}%)`;
      
  //   })
  // },[position])
 

  const project = document.querySelector('.projects');
  // project?.style?.transform = "scale(0.5)";
  // project?.style?.overflow = "visible";



  return (
    <section className={"project_container"} id="projects">
      <h2 className={"project_title"}>Projects</h2>
      <div className={"projects"}>
        {projects.map((project, id) => {
          return <ProjectCard position={position} key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
