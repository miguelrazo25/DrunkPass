import React, { Component } from "react";
import "./Game.css"
import Header from '../header/Header';
import GetDrink from '../getdrink/GetDrink';
var randomWords = require('random-words');

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
        score: 0,
        word: "",
        userInput: ""
        };
    }


    handleSubmit = event => {
        event.preventDefault()
        console.log(`${this.state.userInput}`)
        console.log(`${this.state.word}`)
        if (this.state.word === this.state.userInput){
            console.log('yes')
            return <div>{GetDrink}</div>
        } else {
            console.log('no')
        }
    }

    handleInputChange = event => {
        this.setState({
            userInput: event.target.value
        })
    }

    componentDidMount(){
        this.word();
    }

    word = () => {
        // get word
        const getRandomWord = randomWords();
        this.setState({ word: getRandomWord })
        console.log(getRandomWord)
        //show word to user
        //hide word and let the user type it.

    }
    

    render() {
        return(
            <div>
                <Header />
                <div className="card game-div">
                    <div className="card-header">
                    Type the Word
                    </div>
                    <form onSubmit={this.handleSubmit}>
                    <div className="card-body">
                        <h5 className="card-title">{this.state.word}</h5>
                        <input className="form-control form-control-lg" type="text" value={this.state.userInput} onChange={this.handleInputChange} placeholder="Type the Word"></input>
                        <button type="submit" className="btn btn-mod">Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Game;