import React from "react";

import "./Projects.css";
import { projects } from "../../data";
import Project from "../Project/Project";

function Projects() {
  console.log({ projects });
  return (
    <div className="projects container" id="projects">
      <div className="jumbotron bg-transparent justify-content-center">
        <div className="text-center">
          <h1>My Recent Projects</h1>
          <p className="lead">
            Here are some of my most recent desktop apps. Check out my{" "}
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
      </div>
      <div className="row justify-content-center">
        {projects.map((project) => {
          return <Project project={project} key={project.id} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
