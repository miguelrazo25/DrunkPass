import React from "react";
import "./Header.css"

function Header(){
    return(
    <div>
        <nav class="navbar navbar-light bg-light" role="navigation">
            <div class="navbar-header">
                <a className="navbar-brand">DrunkPass</a>
            </div>
        </nav>
    </div>
    );
}

export default Header;