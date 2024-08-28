import React, { useEffect } from "react";

import "./ProjectCard.scss";
import { getImageUrl } from "../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source, position },
}) => {
 

  return (
    <div className={"projectcard_container"}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={"image"}
      />
      <h3 className={"projectcard_title"}>{title}</h3>
      <p className={"projectcard_description"}>{description}</p>
      <ul className={"skills"}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={"links"}>
        <a href={demo} className={"link"}>
          Demo
        </a>
        <a href={"source"} className={"link"}>
          Source
        </a>
      </div>
    </div>
  );
};
