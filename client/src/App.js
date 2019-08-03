import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Landing from "./components/pages/Landing";
import Game from "./components/pages/Game";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Landing} />
        <Route path="/game" component={Game} />
      </Router>
    </div>
  );
}

export default App;
