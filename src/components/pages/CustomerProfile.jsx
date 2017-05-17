import React, { Component } from 'react';
import FormField from '../common/FormField';

class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <FormField fieldName="name" labelText="Name" />
        <FormField fieldName="address" labelText="Address" />
        <FormField fieldName="city" labelText="City" />
      </div>
    );
  }
}

export default CustomerProfile;
