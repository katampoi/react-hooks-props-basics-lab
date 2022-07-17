import React from "react";
import Links from "./Links";

function About(props) {
  const theBio = props.bio;
  return (
    <div id="about">
      <h2>About Me</h2>
      {theBio ? <p> {props.bio}</p> : "" }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
     <Links github={props.links.github} linkedin={props.links.linkedin}/> 

    </div>
  );
}

export default About;
