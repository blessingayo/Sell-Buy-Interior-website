import React from "react";
import "../components/AboutUs.css";
import storyPics from "./images/pexels-mikhail-nilov-6707628.jpg";

const AboutUs = () => {
  return (
    <div>
      <div>
        <h3 className="about-header">
          About company
          <span>
            <h6 className="history">some History</h6>
          </span>
        </h3>
      </div>

      <div className="about-msg-line">
        <h3 className="date">1920</h3>

        <div className="storyPick-section">
          <p id="lorem">
            Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit,
            sed do eiusmod tempor incididunt <br></br>ut labore et dolore magna
            occaecat cupidatat
            <br></br> non proident, sunt in culpa qui officia deserunt<br></br>{" "}
            mollit anim id est laborum.
          </p>
          <img className="story-pick" src={storyPics} alt="story-pick" />
        </div>

        <div className="storyPick-section1">
          <h3>1986</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit,
            sed do eiusmod tempor incididunt <br></br>ut labore et dolore magna
            occaecat cupidatat
            <br></br> non proident, sunt in culpa qui officia deserunt<br></br>
            mollit anim id est laborum.
          </p>

          <button className="more-btn">
            <span>More</span>
          </button>
        </div>
      </div>
    </div>

    
  );
};

export default AboutUs;
