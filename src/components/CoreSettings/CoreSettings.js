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

  handleCoreSettingsChange() {
    const fields = this.refs.coreSettings.querySelectorAll('input');
    let settings = {};

    fields.forEach((field) => {
      settings[field.getAttribute('name')] = field.value;
    });

    this.props.setCoreGridSettingsStyles(settings);
  }

  render() {
    return (
      <div className="settings">
        <h2>Settings</h2>
        <form>
          <div className="field">
            <input type="checkbox"
                name="display-type"
                id="display-type-grid"
                checked={this.props.settings.display === 'grid'}
                onChange={($event) => this.handleEnabledChange($event)} />
            <label htmlFor="display-type-grid">Enabled</label>
          </div>

          <fieldset ref="coreSettings">
            <div className="field">
              <label htmlFor="grid-gap">Grid gap</label>
              <input type="text"
                  name="gridGap"
                  id="grid-gap"
                  onChange={($event) => this.handleCoreSettingsChange($event)}
                  value={this.props.settings['gridGap']} />
            </div>

            <div className="field">
              <label htmlFor="grid-template-columns">Grid template columns</label>
              <input type="text"
                  name="gridTemplateColumns"
                  id="grid-template-columns"
                  onChange={($event) => this.handleCoreSettingsChange($event)}
                  value={this.props.settings['gridTemplateColumns']} />
            </div>

            <div className="field">
              <label htmlFor="grid-template-rows">Grid template rows</label>
              <input type="text"
                  name="gridTemplateRows"
                  id="grid-template-rows"
                  onChange={($event) => this.handleCoreSettingsChange($event)}
                  value={this.props.settings['gridTemplateRows']} />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CoreSettings;
