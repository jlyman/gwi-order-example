import React, { Component } from 'react';
import FormField from '../common/FormField';

class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <FormField labelText="Name" />
        <FormField labelText="Address" />
        <FormField labelText="City" />
      </div>
    );
  }
}

export default CustomerProfile;
