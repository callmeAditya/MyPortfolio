import React from "react";

import "./Contact.scss";
import { getImageUrl } from "../utils";

export const Contact = () => {
  const contacts = [
    {
      src:"contact/emailIcon.png",
      href: "mailto:aditya.rana.se@gmail.com",
      text: "aditya.rana.se@gmail.com"
    },
    {
      src:"contact/linkedinIcon.png",
      href: "www.linkedin.com/in/rana-aditya90210",
      text: "/rana-aditya90210"
    },
    {
      src:"contact/githubIcon.png",
      href: "www.github.com/callmeAditya",
      text: "/callmeAditya"
    },
  ]
  return (
    <footer id="contact" className={"contact_container"}>
      <div className={"text"}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={"contact_links"}>
      { contacts.map((item,key)=> 
       <li id={key} className={"contact_link"}>
          <img src={getImageUrl(item.src)} alt="Email icon" />
          <a href={item.href}>{item.text}</a>
        </li>)
        }







       
      </ul>
    </footer>
  );
};
