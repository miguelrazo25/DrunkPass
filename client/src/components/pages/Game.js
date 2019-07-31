import React, { Component } from "react";
import "./Game.css"
import Header from '../header/Header';
var randomWords = require('random-words');

class Game extends Component {
    state = {
        score: 0,
        word: ""
    };

    async componentDidMount(){
        const getRandomWord = randomWords();
        this.setState({ word: getRandomWord })
        console.log(getRandomWord)
    }

    render() {
        return(
            <div>
                <Header />
                <div className="card game-div">
                    <div className="card-header">
                    Type the Word
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.word}</h5>
                        <input className="form-control form-control-lg" type="text" placeholder="Type the Word"></input>
                        <a className="btn btn-mod">Submit</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Game;