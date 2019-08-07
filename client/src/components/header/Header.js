import React from "react";
import "./Header.css"
import Palms from './palm.png';

function Header(){
    return(
    <div>
        <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
                <img className="imgSize" src={Palms}/>
                <h1 className="navbar-brand">DrunkPass</h1>
            </div>
        </nav>
    </div>
    );
}

export default Header;