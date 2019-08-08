import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './GameOver.css';


class GameOver extends Component {
    constructor(props) {
        super(props);
        this.state = {
            routeToLanding: false
        };

    }

    render() {
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Game Over!</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Juan</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jose</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Pedro</td>
                                    <td>2</td>
                                </tr>
                            </tbody>
                        </table>
                        <button  type="button" className="btn btn-class"><Link to={"/"}>Play Again</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameOver;