import React from "react";

import "./ContactMe.css";
import SocialMediaButtons from "../SocialMediaBtns/SocialMediaButtons";

function ContactMe() {
  return (
    <div className="contact_me container">
      <div className="jumbotron bg-transparent text-center">
        <h1 className="">Let's Talk.</h1>
        <p className="lead">
          Since completing my Full Stack Coding course and recieving my
          certification, my learning has not stopped. I have been taking the
          time since graduating to continue to learn and understand new
          technology and to make React and JavaScript my core strengths.
        </p>
        <div className="line"></div>
      </div>
      <SocialMediaButtons />
    </div>
  );
}

export default ContactMe;
