import React from "react";
import "./Header.css";
import Palms from "./palm.png";

function Header(props) {
  return (
    <div>
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <img className="imgSize" src={Palms} />
          <h1 className="navbar-brand">DrunkPass</h1>
          {props.score ? 
            (<span style={{ display: 'block', textAlign: 'center', fontSize: '25px', color: 'yellow'}} >score: {props.score}</span>)
            : ""
            }
        </div>
      </nav>
    </div>
  );
}

export default Header;
