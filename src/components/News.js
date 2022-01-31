import React from "react";
import "../components/News.css";
import newsSofa from "./images/ignacio-r-cd8wgINZPYc-unsplash.jpg";

const News = () => {
  return (
    <div>
      <div className="news-header">
        <h3 className="about-header">
          News
          <span>
            <h6 className="history">Latest Events</h6>
          </span>
        </h3>
      </div>

      <div className="news-event">
        <img className="news-image" src={newsSofa} alt="master-chair" />

        <div>
          <h5 className="news-heading">In a number of recent judicial </h5>
          <h6 className="news-date"> 12 -09- 2018</h6>

          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit,
            sed do eiusmod tempor incididunt <br></br>ut labore et dolore magna
            occaecat cupidatat
            <br></br> non proident, sunt in culpa qui officia deserunt<br></br>
            mollit anim id est laborum.<br></br>
          </p>

          <button className="more-btn">
            <span>More &rarr;</span>
          </button>
      

      
          <h5 className="news-heading">In a number of recent judicial </h5>
          <h6 className="news-date"> 12 -09- 2018</h6>

          <p>
            Lorem ipsum dolor sit amet, consectetur <br></br>adipiscing elit,
            sed do eiusmod tempor incididunt <br></br>ut labore et dolore magna
            occaecat cupidatat
            <br></br> non proident, sunt in culpa qui officia deserunt<br></br>
            mollit anim id est laborum.<br></br>
          </p>

          <button className="more-btn">
            <span>More &rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
