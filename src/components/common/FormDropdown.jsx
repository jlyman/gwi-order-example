import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormDropdown extends Component {
	render() {
		return (
			<div className="form-group">
        <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
        <select id={this.props.fieldName} className="form-control">
        	{this.props.choices.map(choice => (
            <option value={choice.value} key={choice.value}>{choice.text}</option>)
          )}
        </select>
      </div>
		);
	}
}

FormDropdown.defaultProps = {
  labelText: '',
};

FormDropdown.propTypes = {
  fieldName: PropTypes.string.isRequired,
  choices: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  labelText: PropTypes.string,
};

export default FormDropdown;
