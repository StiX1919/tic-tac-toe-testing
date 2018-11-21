import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from './components/Board/Board'

class App extends Component {

  // prep for tests tomorrow
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <Board />
        </header>
      </div>
    );
  }
}

export default App;
