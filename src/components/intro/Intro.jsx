import React, { useEffect, useRef } from 'react';
import { init } from 'ityped';
import "./Intro.scss";

function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, { 
      showCursor: false, 
      backDelay: 1500,
      strings: ['Content Marketer', 'English Teacher' ] })
  }, [])


  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/headshot.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm <span>Lisa.</span></h2>
          <h3 ref={textRef}>Fullstack Developer</h3>
        </div>

        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Intro;
