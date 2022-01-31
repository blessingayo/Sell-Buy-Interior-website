import React from "react";
import "../components/AboutUs.css";
import storyPics from "./images/pexels-mikhail-nilov-6707628.jpg";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div>
        <h3 className="about-header">
          About company
          <span>
            <h6 className="history">some History</h6>
          </span>
        </h3>
      </div>

      <div className="storyPick-section">
        <div className="line">
        <h4 className="date">1920</h4>
        <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          occaecat cupidatat
           non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>

        <h4>1986</h4>

        <p className="lorem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna
          occaecat cupidatat
           non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>

        <button className="more-btn">
          <span>More</span>
        </button>
      </div>
      <img className="story-pick" src={storyPics} alt="story-pick" />
      </div>
    </div>
  );
};

export default AboutUs;
