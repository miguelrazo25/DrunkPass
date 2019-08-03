import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import Header from '../header/Header';
import '../pages/Game.css'
var randomWords = require('random-words');

class Game extends Component {
	constructor(props) {
		super(props)
		this.state = {
			score: 0,
			word: "",
			userInput: "",
			redirectToDrink: false
		};
	}


	handleSubmit = event => {
		event.preventDefault()
		console.log(`${this.state.userInput}`)
		console.log(`${this.state.word}`)
		if (this.state.word === this.state.userInput){
			this.setState({ redirectToDrink: true })
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
		setTimeout( () =>{
			document.getElementById("word-text").remove()
		},5000)

	}


	render() {
		if(this.state.redirectToDrink) {
			return <Redirect to="/drink" />
		}

		return(
			<div>
				<Header />
				<div className="card game-div">
					<div className="card-header">
						Type the Word
					</div>
					<form onSubmit={this.handleSubmit}>
						<div className="card-body">
							<h5 className="card-title" id="word-text">{this.state.word}</h5>
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
