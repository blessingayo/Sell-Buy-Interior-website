import { useEffect, useState } from "react";
// import image from "./images/";
import "../components/Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className="content">
      {/* <img className="nav-image" src={image} alt="sofa-image" /> */}

      <div className={`nav ${show && "nav__black"}`}>
        <img
          className="nav__logo"
          src="https://cdn.logojoy.com/wp-content/uploads/2018/05/01111022/1357.png"
        />
        <ul className="nav__avatar">
          <li style={{color: `${show ? 'white' : 'black' }` }} className="nav1">Main</li>
          <li style={{color: `${show ? 'white' : 'black' }` }} className="nav1">Gallery</li>
          <li style={{color: `${show ? 'white' : 'black' }` }} className="nav1">About</li>
          <li style={{color: `${show ? 'white' : 'black' }` }} className="nav1">Contact</li>
          <li style={{color: `${show ? 'white' : 'black' }` }} className="nav1">+234-8011-111-222</li>
        </ul>

      </div>
      <div className="message">
          <h1>Interior in </h1>
          <h1>your House</h1>
          <h4>choose yourself something new</h4>
          <button className="more-btn"><span>More</span></button>
        </div>
    </div>
  );
};

export default Nav;
