import React from "react";

import "./Project.css";

function Project({ project }) {
  console.log(project);
  return (
    <>
      <div className="col-xs-6">
        <div className="card project_card">
          <div className="card-img text-center">
            <div className="circle"></div>
            <img src={project.icon} alt="project icon" className="icon" />
          </div>
          <div className="project_info card-body text-center">
            <h3 className="name card-title text-white">{project.name}</h3>
            <p className="desc_project card-text text-black-50">
              {project.description[0]}
            </p>
            <p className="desc_tools card-text text-black-50">
              {project.description[1]}
            </p>
            <div className="linkTo card-text">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <button>Visit Website</button>
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
