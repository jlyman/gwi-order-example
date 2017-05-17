import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormField from '../common/FormField';
import { Contact } from '../../models';

class ContactsEntryTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			entries: this.props.contacts,
		};
	}

	renderEntryRow(contact) {
		return (
			<tr key={contact.id}>
				<td>{contact.type}</td>
				<td>{contact.name}</td>
				<td>{contact.phone}</td>
				<td>{contact.email}</td>
				<td></td>
			</tr>
		)
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						<th>Type</th>
						<th>Name</th>
						<th>Phone</th>
						<th>Email</th>
					</tr>
				</thead>

				<tbody>
					{this.state.entries.map(contact => this.renderEntryRow(contact))}

					<tr>
						<td><FormField fieldName="type" /></td>
						<td><FormField fieldName="name" /></td>
						<td><FormField fieldName="phone" /></td>
						<td><FormField fieldName="email" /></td>
						<td><button type="button">Add</button></td>
					</tr>
				</tbody>
			</table>
		);
	}
}

ContactsEntryTable.propTypes = {
	contacts: PropTypes.arrayOf(PropTypes.shape(Contact)).isRequired,
}

export default ContactsEntryTable;
