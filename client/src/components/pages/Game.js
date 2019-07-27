import React, { Component } from "react";
import "./Game.css"

class Game extends Component {
    state = {
        score: 0,
        word: ""
    }

    render() {
        return(
            <div>
                <p>Welcome to the Game</p>
            </div>
        )
    }
}

export default Game;