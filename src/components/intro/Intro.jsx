import React from 'react';
import "./Intro.scss";

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/headshot.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Lisa</h1>
          <h3>Fullstack <span>Developer</span></h3>
        </div>
      </div>
    </div>
  )
}

export default Intro;
