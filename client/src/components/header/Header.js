import React from "react";
import "./Header.css"

function Header(){
    return(
    <div>
        <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
                <h1 className="navbar-brand">DrunkPass</h1>
            </div>
        </nav>
    </div>
    );
}

export default Header;