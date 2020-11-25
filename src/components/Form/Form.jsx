import React from "react";

import "./Form.css";

function Form() {
  return (
    <div className="contact_form">
      <div className="container">
        <div className="card justify-content-center">
          <div className="row contact_row align-items-center">
            <div className="col-sm-4 text-center">
              <h1 className="text-white ">Send an Email</h1>
            </div>
            <div className="col-sm-4 text-center">
              <p className="text-white">
                I'd love to chat and see if working together will be a great
                fit.
              </p>
            </div>
            <div className="col-sm-4 text-center">
              <a href="mailto:mvolonnino12@gmail.com?subject=Job%20Opportunity">
                <button className="mailto">Email Me</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row logo_row justify-content-center">
        <div className="col text-center">
          <div className="logo text-center">
            <button>
              <h3 className="m-0">MV</h3>
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-center text-white lead mt-5">
            Presented by: Matt Volonnino ©
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="text-center text-white mt-5 quote">
            <em>
              "I have not failed. I've just found 10,000 ways that won't work."
              --Thomas A. Edison
            </em>
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col text-center">
          <a href="#about">
            <button className="btn_link">About</button>
          </a>
          <a href="#projects">
            <button className="btn_link">Projects</button>
          </a>
          <a href="#resume">
            <button className="btn_link">Resume</button>
          </a>
          <a href="#landing">
            <button className="btn_link">Home</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Form;
