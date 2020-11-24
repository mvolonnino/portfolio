import React from "react";

import "./Skills.css";
import devicesLogo from "../../img/devices3.svg";
import serverLogo from "../../img/server2.svg";

function Skills() {
  return (
    <div className="skills container">
      <div className="skills_card bg-light text-center row">
        <div className="col-md card bg-light border-0">
          <div className="devices">
            <object
              data={devicesLogo}
              width="92"
              height="92"
              aria-label="front-end device"
            ></object>
          </div>
          <h2 className="">Front-End</h2>
          <p className="desc lead">
            I like to create and learn how front end development can change and
            make a website look beautiful.
          </p>
          <div className="languages">
            <h5>Languages I speak:</h5>
            <p>HTML</p>
            <p>CSS</p>
            <p>React</p>
            <p>JavaScript :)</p>
          </div>
          <h5 className="tools">Tools I use:</h5>
          <p>Context API</p>
          <p>Bootstrap</p>
          <p>Redux</p>
          <p>Material UI</p>
          <p>MDBReact</p>
          <p>Google!</p>
        </div>
        <div className="line"></div>
        <div className="col-md card bg-light border-0">
          <div className="devices">
            <object
              data={serverLogo}
              width="92"
              height="92"
              aria-label="back-end device"
            ></object>
          </div>
          <h2 className="">Back-End</h2>
          <p className="desc lead">
            Creating well built back ends to compliment a beautiful front end is
            half the battle.
          </p>
          <div className="languages">
            <h5>Languages I speak:</h5>
            <p>MongoDB</p>
            <p>MySQL</p>
            <p>Firebase</p>
            <p>JavaScript :)</p>
          </div>
          <h5 className="tools">Tools I use:</h5>
          <p>Firebase Console</p>
          <p>Dev Tools Inspect Console</p>
          <p>Terminal</p>
          <p>Node.js</p>
          <p>Express.js</p>
          <p>Heroku</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
