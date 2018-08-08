import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CoreSettingsField extends Component {
  render() {
    const { id, label, type, name, value, onChange } = this.props;

    return (
      <div className="field">
        <label htmlFor={id}>{label}</label>
        <input type={type}
            name={name}
            id={id}
            onChange={onChange}
            value={value} />
      </div>
    );
  }
}

CoreSettingsField.defaultProps = {
  type: 'text'
};

CoreSettingsField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default CoreSettingsField;
