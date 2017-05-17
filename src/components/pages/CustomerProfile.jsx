import React, { Component } from 'react';
import FormField from '../common/FormField';
import FormDropdown from '../common/FormDropdown';
import { PreferredCommunicationMode } from '../../constants';

class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <FormField fieldName="name" labelText="Name" />
        <FormField fieldName="address" labelText="Address" />
        <FormField fieldName="city" labelText="City" />
        <FormField fieldName="state" labelText="State" />
        <hr />
        <FormDropdown
          fieldName="preferredCommunication"
          labelText="Preferred Communication"
          choices={[
            '',
            PreferredCommunicationMode.phone,
            PreferredCommunicationMode.email,
            PreferredCommunicationMode.fax,
          ]}
        />
      </div>
    );
  }
}

export default CustomerProfile;
