import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import AboutUs from "./components/AboutUs";
import Service from "./components/Service";
import News from "./components/News";

const App = () => {
  return (
    <div>
      <Nav />
      <AboutUs />
      <Service />
      <News />
    </div>
  );
};

export default App;
