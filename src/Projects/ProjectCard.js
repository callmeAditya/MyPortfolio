import React, { useEffect } from "react";

import "./ProjectCard.scss";
import { getImageUrl } from "../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, domain },
}) => {
 

  return (
    <div className={"projectcard_container"}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={"image"}
      />
      <h4>{domain}</h4>
      <h3 className={"projectcard_title"}>{title}</h3>
      <p className={"projectcard_description"}><i>{description}</i></p>
      <ul className={"skills"}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={"skill"} >
               {skill} 
            </li>
          );
        })}
      </ul>
     
    </div>
  );
};
