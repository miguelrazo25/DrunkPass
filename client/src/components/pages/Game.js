import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Header from "../header/Header";
import "../pages/Game.css";
var randomWords = require("random-words");

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      word: "",
      userInput: "",
      redirectToDrink: false,
      user: null,
      tooDrunk: false
    };
  }

  componentDidMount() {
    this.word();
    const user = window.localStorage.getItem("username");
    const score = window.localStorage.getItem("userscore");

    if (user) {
      this.setState({ user });
    }

    if (score) {
      this.setState({ score: parseInt(score) });
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.word === this.state.userInput) {
      window.localStorage.setItem("userscore", parseInt(this.state.score + 1));
      this.setState({ redirectToDrink: true });
    } else {
      const userId = window.localStorage.getItem("userId");
      const oldScore = window.localStorage.getItem("userscore");
      this.setState({ tooDrunk: true, oldScore: oldScore });
      axios.patch("/users", { id: userId, score: oldScore });
      this.setState({ score: 0, userInput: "" });
      window.localStorage.setItem("userscore", 0);
    }
  };

  handleInputChange = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  startGame = () => {
    this.setState({ tooDrunk: false });
  };

  word = () => {
    // get word
    const getRandomWord = randomWords();
    this.setState({ word: getRandomWord });
    console.log(getRandomWord);
    //show word to user
    //hide word and let the user type it.
    setTimeout(() => {
      const el = document.getElementById("word-text");
      if (el) {
        el.remove();
      }
    }, 3000);
  };

  render() {
    if (this.state.redirectToDrink) {
      return <Redirect to="/drink" />;
    }

    if (this.state.tooDrunk) {
      return (
        <div className="content">
          <Header score={this.state.oldScore} />
          {this.state.oldScore ? (
            <h1>Your Final Score Is: {this.state.oldScore}</h1>
          ) : (
            ""
          )}
          <h3>Hey You Are Drunk, Go & Drink Some Water !</h3>
          <div>
            <img src="/images/drunk3.jpg" width="50%" />
          </div>
          <button class="btn btn-primary btn-lg " onClick={this.startGame}>
            Play Again
          </button>
        </div>
      );
    }

    return (
      <div>
        <Header score={this.state.score} />
        <div className="card game-div">
          <div className="card-header">Type The Word</div>
          <form onSubmit={this.handleSubmit}>
            <div className="card-body">
              <h5 className="card-title" id="word-text">
                {this.state.word}
              </h5>
              <input
                className="form-control form-control-lg"
                type="text"
                value={this.state.userInput}
                onChange={this.handleInputChange}
                placeholder="Type the Word"
              />
              <button type="submit" className="btn btn-mod">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Game;
