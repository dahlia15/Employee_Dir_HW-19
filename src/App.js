import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
    <Nav />
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/list" component={List} />
    </div>
    </Router>
  );
}

export default App;
