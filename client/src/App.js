import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Game from './components/pages/Game';
import Landing from "./components/pages/Landing";


function App() {
  return (
    <div>
      <Router>
        <Route path="/game" component={Game}/>
          <Route path="/" exact component={Landing}/>
      </Router>
    </div>
  );
}

export default App;
