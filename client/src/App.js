import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import GetDrink from './components/getdrink/GetDrink';
import Header from './components/header/Header'

function App() {
  return (
    <div>
      <Router>
        <Header />
        <GetDrink />
      </Router>
    </div>
  );
}

export default App;
