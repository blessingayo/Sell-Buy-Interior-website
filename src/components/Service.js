import React from "react";
import "../components/Service.css";
import servicePk1 from "./images/pexels-isaw-company-945688.jpg";
import servicePk2 from "./images/pexels-pixabay-220749.jpg";
import servicePk3 from "./images/pexels-pixabay-276534.jpg";

const Service = () => {
  return (
    <div
      style={{ position: "relative", bottom: "27rem" }}
      className="service-background"
    >
      <div>
        <h3 className="about-header">
          Services
          <span>
            <h6 className="history">We Do It</h6>
          </span>
        </h3>
      </div>

      <div className="service-images">
        <div className="myPic">
          <img className="pic-1" src={servicePk1} alt="Pic-1" />
        </div>

        <div className="myPic1">
          <img className="pic-2" src={servicePk2} alt="Pic-2" />
        </div>

        <div className="myPic2">
          <img className="pic-3" src={servicePk3} alt="Pic-3" />
        </div>
        
      </div>
    </div>
  );
};

export default Service;
