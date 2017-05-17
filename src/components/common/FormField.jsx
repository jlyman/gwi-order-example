import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FormField extends PureComponent {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
        <input type="text" className="form-control" id={this.props.fieldName} />
      </div>
    );
  }
}

FormField.defaultProps = {
  labelText: '',
};

FormField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  labelText: PropTypes.string,
};

export default FormField;
