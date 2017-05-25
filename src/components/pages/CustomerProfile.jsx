import React, { Component } from 'react';
import FormField from '../common/FormField';
import FormDropdown from '../common/FormDropdown';
import ContactsEntryTable from '../customerProfile/ContactsEntryTable';
import { PreferredCommunicationMode } from '../../constants';

class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <h2>New Customer</h2>
        
        <FormField fieldName="name" labelText="Name" />
        <FormField fieldName="address" labelText="Address" />
        <FormField fieldName="city" labelText="City" />
        <FormField fieldName="state" labelText="State" />
        
        <hr />
        <FormDropdown
          fieldName="preferredCommunication"
          labelText="Preferred Communication"
          choices={[
            { value: '', text: '' },
            { value: PreferredCommunicationMode.phone, text: 'Phone' },
            { value: PreferredCommunicationMode.email, text: 'Email' },
            { value: PreferredCommunicationMode.fax, text: 'Fax' },
          ]}
        />
        
        <hr />
        <h4>Contacts</h4>
        <ContactsEntryTable contacts={[]} />
      </div>
    );
  }
}

export default CustomerProfile;
