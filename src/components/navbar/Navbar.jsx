import React from 'react';
import "./Navbar.scss";

function Navbar( {menuOpen, setMenuOpen} ) {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Lisa Xu</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}> 
            <span className="lineOne"></span>
            <span className="lineTwo"></span>
            <span className="lineThree"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
