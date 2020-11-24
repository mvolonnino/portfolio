import React from "react";

import "./Resume.css";
import resume from "../../img/mv_resume-1.png";
import pdf from "../../img/mv-resume.pdf";

function Resume() {
  return (
    <>
      <div className="resume" id="resume">
        <div className="col-md-8 text-center">
          <h1 className="about_title">
            I'm available for full time or contract work.
          </h1>
          <h2 className="about_subtitle">
            After completing the Rutgers Coding Bootcamp, I now have 4 months of
            real world experience plus the extra projects I have done as well.
          </h2>
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            <button className="pdf_btn">Link to PDF</button>
          </a>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md">
            <div className="card resume_card">
              <div className="card-img">
                <img src={resume} alt="My Resume" className="resume_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
