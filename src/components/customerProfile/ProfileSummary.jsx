import React from 'react';
import PropTypes from 'prop-types';
import { Customer } from '../../models';

const ProfileSummary = ({ customer }) => (
	<li>
		{customer.name} - {customer.address1} (ID #{customer.id})
	</li>
);

ProfileSummary.propTypes = {
	customer: PropTypes.instanceOf(Customer).isRequired,
};

export default ProfileSummary;
