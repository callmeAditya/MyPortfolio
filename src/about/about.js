import React from 'react';
import { getImageUrl } from '../utils';
import './about.scss'

const About = ()=>{


    return(
        <section className={"about_container"} id="about">
        <h2 className={"about_title"}>About</h2>
        <div className={"about_content"}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="Me sitting with a laptop"
            className={"aboutImage"}
          />
          <ul className={"aboutItems"}>
            <li className={"aboutItem"}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
              <div className={"aboutItemText"}>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a frontend developer with experience in building responsive
                  and optimized sites
                </p>
              </div>
            </li>
            <li className={"aboutItem"}>
              <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
              <div className={"aboutItemText"}>
                <h3>Backend Developer</h3>
                <p>
                  I have experience developing fast and optimised back-end systems
                  and APIs
                </p>
              </div>
            </li>
            <li className={"aboutItem"}>
              <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
              <div className={"aboutItemText"}>
                <h3>UI Designer</h3>
                <p>
                  I have designed multiple landing pages and have created design
                  systems as well
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
};

export default About;