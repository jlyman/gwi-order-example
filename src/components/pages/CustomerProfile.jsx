import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../common/FormField';
import FormDropdown from '../common/FormDropdown';
import ContactsEntryTable from '../customerProfile/ContactsEntryTable';
import { PreferredCommunicationMode } from '../../constants';
import { Customer } from '../../models';

class CustomerProfile extends Component {
  render() {
    return (
      <div>
        <h2>New Customer</h2>

        <FormField fieldName="name" labelText="Name" onChange={this.props.onUpdateField} />
        <FormField fieldName="address1" labelText="Address" onChange={this.props.onUpdateField} />
        <FormField fieldName="city" labelText="City" onChange={this.props.onUpdateField} />
        <FormField fieldName="state" labelText="State" onChange={this.props.onUpdateField} />
        
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

        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={this.props.onAddCustomerClick}
        >
          Save New Customer
        </button>
      </div>
    );
  }
}

CustomerProfile.propTypes = {
  newCustomer: PropTypes.instanceOf(Customer).isRequired,
  onAddCustomerClick: PropTypes.func.isRequired,
  onUpdateField: PropTypes.func.isRequired,
}

export default CustomerProfile;
