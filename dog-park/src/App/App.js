import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'

class App extends Component {
  render() {


    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
