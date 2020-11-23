import React from "react";

import "./Project.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function Project({ project }) {
  console.log(project);
  return (
    <Grid item xs={12}>
      <div className="card">
        <img
          src={project.icon}
          alt="project icon"
          className="icon mr-3 card-img-top"
        />
        <div className="project_info card-body">
          <h3 className="name card-title">{project.name}</h3>
          <h6 className="desc">{project.description}</h6>
          <div className="linkTo">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </Grid>
  );
}

export default Project;
