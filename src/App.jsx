import React, { Component } from 'react';
import './App.css';
import NavBar from './components/common/NavBar.jsx';
import CustomerProfile from './components/pages/CustomerProfile';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="container main-container" role="main">
          <h2>New Customer</h2>
          <CustomerProfile />
        </div>
      </div>
    );
  }
}

export default App;
