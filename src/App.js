
import React from 'react';
import './App.css';
import './components/Login.css';
import Login from './components/Login.js';
import Home from './components/Home.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div class = "App">
    <Router>
    <Switch>
      <Route path = "/crab" exact component = {Login} />
      <Route path = "/home" exact component = {Home} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
