import React, { Component } from "react";
import "./RandomWord.css";


class RandomWord extends Component {
    state = {
        loading: true
    };

    async componentDidMount(){
        const url = "https://wordsapiv1.p.mashape.com/words?random=true";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ drinks: data.drinks[0], loading: false });
        console.log(data);
    } 

    render() {
        return(
            <div>
                <p></p>
            </div>
        )
    }

}