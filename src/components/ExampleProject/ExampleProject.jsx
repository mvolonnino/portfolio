import React from "react";

import "./ExampleProject.css";
import logo from "../../img/VolbeatsMusicLogo.png";

function ExampleProject() {
  return (
    <>
      <div className="project_post">
        <div className="project_post_img">
          <img src={logo} alt="" />
        </div>
        <div className="project_post_info">
          <div className="project_post_date"></div>
          <h1 className="project_post_title">Volbeats Music</h1>
          <p className="project_post_text">
            Spotify Web API to pull user authenticated playlists and Discover
            Weekly that allows for full playback control with volume control as
            well. Check out GitHub readme to see about music playback.
          </p>
          <a href="https://volbeats-music.web.app/">Website</a>
        </div>
      </div>
    </>
  );
}

export default ExampleProject;
