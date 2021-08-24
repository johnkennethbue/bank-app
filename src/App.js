
import React, { Component } from 'react';
import './App.css';
import './components/Animation.css';
import Login from './components/LoginPage.js';
import Home from './components/HomePage.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component{
  
render(){
  return (
    <div className = "App">
    <Router>
    <Switch>
      <Route path = "/bank-app" exact component = {Login} />
      <Route path = "/home" exact component = {Home} />
    </Switch>
    </Router>
    </div>
  );
}
}

export default App;
