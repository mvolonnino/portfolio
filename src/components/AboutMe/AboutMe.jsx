import React from "react";

import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about_me" id="about">
      <div className="col-md-8 text-center">
        <h1 className="about_title">Hi, I'm Matt. Nice to meet you.</h1>
        <h2 className="about_subtitle">
          I am a certified Full Stack Web Developer that loves creating
          beautiful websites and fun projects. I have created apps that range
          from social media designs to messenging platforms to building entire
          universes from different comic book characters, while also utilizing
          scripts I wrote for webscrapping and creating my own database of over
          12k collectible Funko Pops!
        </h2>
      </div>
    </div>
  );
}

export default AboutMe;

// My latest project,
// Your Average Funko, allowed me to create a web scrapper and database
// of over 12k funko pops (and growing). Users are able to create an
// account and search through my database to add the funko pops they own
// to their collection and ones they want to a want list while also being
// able to message other users based on their collections!
