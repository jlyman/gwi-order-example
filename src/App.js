import React, { Component } from 'react';
import './App.css';
import NavBar from './components/common/NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="container main-container" role="main">
          <h1>Contents here</h1>
        </div>
      </div>
    );
  }
}

export default App;
