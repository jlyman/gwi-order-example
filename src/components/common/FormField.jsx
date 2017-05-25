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
    return (
      <div className="form-group">
        <label htmlFor={this.props.fieldName}>{this.props.labelText}</label>
        <input
          type="text"
          className="form-control"
          id={this.props.fieldName}
          value={this.props.value}
          onChange={this._onChange}
        />
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
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
