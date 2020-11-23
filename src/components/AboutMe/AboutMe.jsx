import React from "react";

import "./AboutMe.css";
import useOnScreen from "../../hooks/useOnScreen";

function AboutMe() {
  const [ref, showHeader] = useOnScreen({ threshold: 0.85, div: "AboutMe" });

  return (
    <div className="about_me" id="about" ref={ref}>
      <div className="col-md-8 text-center">
        <h1 className="about_title">Hi, I'm Matt. Nice to meet you.</h1>
        <h2 className="about_subtitle">
          I am a certified Full Stack Web Developer that loves creating
          beautiful websites and fun projects. I have created apps that range
          from social media designs to messenging platforms to building entire
          universes from different comic book characters.
        </h2>
      </div>
    </div>
  );
}

export default AboutMe;