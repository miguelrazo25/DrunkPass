import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from './components/pages/Game';
import Landing from "./components/pages/Landing";
import GetDrink from './components/pages/GetDrink';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route path="/drink" component={GetDrink} />
        <Route path="/game" component={Game} />
        <Route path="/" exact component={Landing} />
      </Router>
    </div>
  );
}

export default App;
