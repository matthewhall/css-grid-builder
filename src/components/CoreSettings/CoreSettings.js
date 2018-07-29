import React, { Component } from 'react';

import './CoreSettings.scss';

class CoreSettings extends Component {
  handleEnabledChange(event) {
    let value;

    if (event.target.checked) {
      value = 'grid';
    } else {
      value = 'block';
    }

    this.props.setNodeListDisplayStyle(value);
  }

  render() {
    return (
      <div className="settings">
        <h2>Settings</h2>
        <form>
          <input type="checkbox"
              name="display-type"
              id="display-type-grid"
              checked={this.props.settings.display === 'grid'}
              onChange={($event) => this.handleEnabledChange($event)} />
          <label htmlFor="display-type-grid">Enabled</label>
        </form>
      </div>
    );
  }
}

export default CoreSettings;
