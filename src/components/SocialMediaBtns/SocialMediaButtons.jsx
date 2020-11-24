import React from "react";

import "./SocialMediaButtons.css";
import socialmedia from "../../img/socialmedia.svg";
import linkedin from "../../img/linkedin-5.svg";
import github from "../../img/github.png";
import facebookLike from "../../img/facebookLike.png";
import twitter from "../../img/twitter-logo.png";

function SocialMediaButtons() {
  return (
    <div className="card-columns">
      <div className="card text-center">
        <object
          data={linkedin}
          type=""
          height="190px"
          className="card-img-top pt-5"
        ></object>
        <div className="card-body">
          <h5 className="card-title">
            Message and Connect with me on LinkedIn
          </h5>
          <a
            href="https://www.linkedin.com/in/matthew-volonnino-30076a1b1/"
            target="_blank"
          >
            <button className="social_btn linkedin_btn">LinkedIn</button>
          </a>
        </div>
      </div>
      <div className="card p-3">
        <blockquote className="blockquote mb-0 card-body">
          <p>
            “I’ve missed more than 9,000 shots in my career. I’ve lost almost
            300 games. 26 times I’ve been trusted to take the game winning shot
            and missed. I’ve failed over and over and over again in my life and
            that is why I succeed.”
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">Michael Jordan</small>
          </footer>
        </blockquote>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Follow, Star, and Checkout my GitHub.</h5>
          <a href="https://github.com/mvolonnino" target="_blank">
            <button className="social_btn">GitHub</button>
          </a>
          <img
            className="card-img-bottom github_img"
            src={github}
            alt="Card image cap"
          />
        </div>
      </div>
      <div className="card center_bg text-white text-center p-3">
        <blockquote className="blockquote mb-0">
          <object
            data={socialmedia}
            height="200px"
            width="100%"
            type=""
          ></object>
          <footer className="blockquote-footer text-white">
            <small>Lets Connect</small>
          </footer>
        </blockquote>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <p className="card-text">
            “The secret of getting ahead is getting started.”
          </p>
          <h5 className="card-title">Start Now.</h5>
          <footer className="blockquote-footer">
            <small className="text-muted">Mark Twain</small>
          </footer>
        </div>
      </div>
      <div className="card text-center">
        <img
          className="card-img facebook_img"
          src={facebookLike}
          alt="facebook like"
        />
        <h5>Friend me on Facebook</h5>
        <a href="https://www.facebook.com/matt.volonnino" target="_blank">
          <button className="social_btn facebook_btn">Facebook</button>
        </a>
      </div>
      <div className="card p-3 text-right">
        <blockquote className="blockquote mb-0">
          <p>
            “If people are doubting how far you can go, go so far that you can’t
            hear them anymore.”
          </p>
          <footer className="blockquote-footer">
            <small className="text-muted">Michele Ruiz</small>
          </footer>
        </blockquote>
      </div>
      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Tweet Me!</h5>
          <img src={twitter} alt="twitter" className="card-img twitter_img" />
          <a href="https://twitter.com/MatthewVolonni1" target="_blank">
            <button className="social_btn twitter_btn">Twitter</button>
          </a>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaButtons;
