import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FormField extends PureComponent {
  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);
  }

  _onChange(e) {
    this.props.onChange(this.props.fieldName, e.target.value);
  }

  render() {
    const errorMessage = this.props.errors.hasOwnProperty(this.props.fieldName)
      ? <span className="error">{this.props.errors[this.props.fieldName]}</span>
      : null;

    return (
      <div className="form-group">
        <label htmlFor={this.props.fieldName}>{this.props.labelText} {this.props.required ? '*' :''}</label>
        <input
          type="text"
          className="form-control"
          id={this.props.fieldName}
          value={this.props.value}
          onChange={this._onChange}
        />
        {errorMessage}
      </div>
    );
  }
}

FormField.defaultProps = {
  labelText: '',
  required: false,
  errors: {},
};

FormField.propTypes = {
  fieldName: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
