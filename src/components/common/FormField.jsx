import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FormField extends PureComponent {
  render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.inputId}>{this.props.labelText}</label>
        <input type="text" className="form-control" id={this.props.inputId} />
      </div>
    );
  }
}

FormField.defaultProps = {
  labelText: '',
  inputId: '',
};

FormField.propTypes = {
  labelText: PropTypes.string,
  inputId: PropTypes.string,
};

export default FormField;
