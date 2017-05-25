import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormDropdown from './FormDropdown';

class FormYesNoDropdown extends Component {
	render() {
		return (
			<FormDropdown
        {...this.props}
        choices={[
          { value: 'Y', text: 'Y' },
          { value: 'N', text: 'N' },
        ]}
      />
		);
	}
}

FormYesNoDropdown.defaultProps = {
  labelText: '',
};

FormYesNoDropdown.propTypes = {
  fieldName: PropTypes.string.isRequired,
  labelText: PropTypes.string,
};

export default FormYesNoDropdown;
