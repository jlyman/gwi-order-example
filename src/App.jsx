import React, { Component } from 'react';
import './App.css';
import NavBar from './components/common/NavBar.jsx';
import CustomerProfile from './components/pages/CustomerProfile';
import NewOrder from './components/pages/NewOrder';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />

        <div className="container main-container" role="main">
          <h2>New Customer</h2>
          <CustomerProfile />

          <hr />

          <h2>New Order</h2>
          <NewOrder />
        </div>
      </div>
    );
  }
}

export default App;
