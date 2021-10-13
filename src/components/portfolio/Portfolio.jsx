import React from 'react';
import "./Portfolio.scss";

function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio__container">
        <div className="portfolio__item">
          <img src="assets/yams1.png" alt="" />
          <h3>Yet Another Management Solution (YAMS)</h3>
        </div>
        <div className="portfolio__item">
          <img src="assets/recy1.png" alt="" />
          <h3>Recyclopedia</h3>
        </div>
        <div className="portfolio__item">
          <img src="assets/amazon1.png" alt="" />
          <h3>Amazon Clone</h3>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;
