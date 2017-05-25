import React, { Component } from 'react';
import './App.css';
import NavBar from './components/common/NavBar.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="container main-container" role="main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
