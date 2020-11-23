import React from "react";

import "./Projects.css";
import { projects } from "../../data";
import Project from "../Project/Project";
import Grid from "@material-ui/core/Grid";

function Projects() {
  console.log({ projects });
  return (
    <div className="projects container" id="projects">
      <div className="jumbotron bg-transparent">
        <div className="text-center">
          <h1>My Recent Projects</h1>
          <p className="lead">
            Here are some of my most recents works. Check out my{" "}
            <span>
              <a
                href="http://github.com/mvolonnino"
                target="_blank"
                rel="noreffer noopener"
              >
                GitHub
              </a>
            </span>{" "}
            to see more.
          </p>
        </div>
        <hr className="my-4" />
        <Grid container wrap="wrap" spacing={3}>
          {projects.map((project) => {
            return <Project project={project} key={project.id} />;
          })}
        </Grid>
      </div>
    </div>
  );
}

export default Projects;
