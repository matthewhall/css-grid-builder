import React, { Component } from 'react';

import './CoreSettings.scss';

class CoreSettings extends Component {
  render() {
    return (
      <div className="settings">
        <h2>Settings</h2>
        <form>
          <input type="radio" name="display-type" id="display-type-grid" value="grid" defaultChecked={true} />
          <label htmlFor="display-type-grid">Grid</label>
          <input type="radio" name="display-type" id="display-type-block" value="block" />
          <label htmlFor="display-type-block">Block</label>
          <input type="radio" name="display-type" id="display-type-inline" value="inline" />
          <label htmlFor="display-type-inline">Inline</label>
        </form>
      </div>
    );
  }
}

export default CoreSettings;
