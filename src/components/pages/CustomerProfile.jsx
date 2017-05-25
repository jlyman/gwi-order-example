import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../common/FormField';
import FormDropdown from '../common/FormDropdown';
import ProfileSummary from '../customerProfile/ProfileSummary';
import ContactsEntryTable from '../customerProfile/ContactsEntryTable';
import { PreferredCommunicationMode } from '../../constants';
import { Customer } from '../../models';

class CustomerProfile extends Component {
  componentDidMount() {
    this.props.onRetrieveCustomers();
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>

        <ul>
          {_.map(this.props.customers, c => <ProfileSummary customer={c} />)}
        </ul>

        <h2>New Customer</h2>

        <FormField fieldName="name" labelText="Name" required value={this.props.newCustomer.name} onChange={this.props.onUpdateField} errors={this.props.errors} />
        <FormField fieldName="address1" labelText="Address" required value={this.props.newCustomer.address1} onChange={this.props.onUpdateField} errors={this.props.errors} />
        <FormField fieldName="city" labelText="City" value={this.props.newCustomer.city} onChange={this.props.onUpdateField} errors={this.props.errors} />
        <FormField fieldName="state" labelText="State" value={this.props.newCustomer.state} onChange={this.props.onUpdateField} errors={this.props.errors} />
        
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
  customers: PropTypes.object.isRequired,
  newCustomer: PropTypes.instanceOf(Customer).isRequired,
  errors: PropTypes.object,
  onAddCustomerClick: PropTypes.func.isRequired,
  onUpdateField: PropTypes.func.isRequired,
  onRetrieveCustomers: PropTypes.func.isRequired,
}

export default CustomerProfile;
