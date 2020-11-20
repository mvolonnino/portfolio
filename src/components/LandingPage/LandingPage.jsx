import React, { useState, useEffect } from "react";

import "./LandingPage.css";
import myAvatar from "../../img/myAvatar.png";
import Typewriter from "typewriter-effect";

function LandingPage() {
  const [cardEl, setCardEl] = useState({});
  if (Object.entries(cardEl).length > 0) {
    console.log(cardEl);
  }

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
    <div
      className="container"
      onMouseMove={_onMouseMove}
      onMouseLeave={_onMouseLeave}
      onMouseEnter={_onMouseEnter}
    >
      <div className="card">
        <div className="avatar">
          <div className="circle"></div>
          <img src={myAvatar} alt="My Avatar" />
        </div>
        <hr />
        <div className="info">
          <h3 className="greeting">Hi, I am </h3>
          <h1 className="title">Matt Volonnino</h1>
          <h3 className="description">
            <Typewriter
              options={{
                strings: [
                  "Software Engineer",
                  "Lifetime Learner",
                  "Problem Solver",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </h3>
        </div>
        <div className="links">
          <button className="about">About Me</button>
          <button className="projects">My Project</button>
          <button className="resume">My Resume</button>
          <button className="contact">Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
