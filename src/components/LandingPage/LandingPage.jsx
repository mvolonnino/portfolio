import React, { useState, useEffect } from "react";

import "./LandingPage.css";
import myAvatar from "../../img/myAvatar.png";
import Typewriter from "typewriter-effect";
import { isMobile } from "react-device-detect";

function LandingPage() {
  console.log({ isMobile });
  const [cardEl, setCardEl] = useState({});

  const _onMouseMove = (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    cardEl.card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  };

  const _onMouseEnter = (e) => {
    cardEl.card.style.transition = `none`;

    cardEl.avatar.style.transform = `translateZ(100px)`;
    cardEl.title.style.transform = `translateZ(80px)`;
    cardEl.greeting.style.transform = `translateZ(80px)`;
    cardEl.description.style.transform = `translateZ(100px)`;
    cardEl.links.style.transform = `translateZ(50px)`;
  };

  const _onMouseLeave = (e) => {
    cardEl.card.style.transition = `all 500ms ease`;
    cardEl.card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    cardEl.avatar.style.transform = `translateZ(0px)`;
    cardEl.title.style.transform = `translateZ(0px)`;
    cardEl.greeting.style.transform = `translateZ(0px)`;
    cardEl.description.style.transform = `translateZ(0px)`;
    cardEl.links.style.transform = `translateZ(0px)`;
  };

  useEffect(() => {
    setCardEl({
      card: document.querySelector(".card"),
      title: document.querySelector(".title"),
      avatar: document.querySelector(".avatar img"),
      description: document.querySelector(".description"),
      links: document.querySelector(".links"),
      greeting: document.querySelector(".greeting"),
    });
  }, []);

  return (
    <>
      <div
        id="landing"
        className="container myContainer"
        onMouseMove={!isMobile && _onMouseMove}
        onMouseLeave={!isMobile && _onMouseLeave}
        onMouseEnter={!isMobile && _onMouseEnter}
      >
        <div className="myCard card bg-transparent">
          <div className="avatar card-img-top">
            <div className="circle"></div>
            <img src={myAvatar} alt="My Avatar" />
          </div>
          <div className="info card-body text-center">
            <h3 className="greeting card-text">Hi, I am </h3>
            <h1 className="title card-title">Matt Volonnino</h1>
            <h3 className="description card-text">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Problem Solver",
                    "Software Engineer",
                    "Lifetime Learner",
                    "Adventurer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </h3>
            <div className="links card-text">
              <a href="#about">
                <button>About</button>
              </a>
              <a href="#projects">
                <button>Projects</button>
              </a>
              <a href="#resume">
                <button className="resume_button">Resume</button>
              </a>
              <a href="#contact">
                <button className="contact">Contact</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
