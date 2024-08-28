import React from "react";

import "./Experience.scss";
import skills from "../data/skills.json";
import history from "../data/history.json";
import { getImageUrl } from "../utils";

export const Experience = () => {
  return (
    <section className={"experience_container"} id="experience">
      <h2 className={"experience_title"}>Experience</h2>
      <div className={"experience_content"}>
        <div className={"experience_skills"}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={"experience_skill"}>
                <div className={"experience_skillImageContainer"}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={"history"}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={"historyItem"}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={"historyItemDetails"}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
