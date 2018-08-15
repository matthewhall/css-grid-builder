import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CoreSettingsField extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    type: PropTypes.string.isRequired,
    value: PropTypes.string
  }

  static defaultProps = {
    type: 'text'
  }

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

export default CoreSettingsField;
