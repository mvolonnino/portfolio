import React from "react";

import "./Resume.css";
import resume from "../../img/mv_resume_new.png";
import pdf from "../../img/mv_resume_new.pdf";

function Resume() {
  return (
    <>
      <div className="resume" id="resume">
        <div className="col-md-8 text-center">
          <h1 className="about_title">
            I'm available for full time or contract work.
          </h1>
          <h2 className="about_subtitle">
            After completing the Rutgers Coding Bootcamp and receiving my MERN
            stack certification, I have been working on multiple different
            projects giving me real world experience and the opportunity to
            learn new techniques and technologies.
          </h2>
          <a href={pdf} target="_blank" rel="noopener noreferrer">
            <button className="pdf_btn">Resume PDF</button>
          </a>
        </div>
      </div>
      <div className="resume_container container">
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
