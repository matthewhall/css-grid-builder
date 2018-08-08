import React, { Component } from 'react';
import CoreSettingsField from './CoreSettingsField';

import './CoreSettings.scss';

class CoreSettings extends Component {
  constructor(props) {
    super(props);

    this.handleCoreSettingsChange = this.handleCoreSettingsChange.bind(this);
  }

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
          <div className="field field--inline">
            <input type="checkbox"
                name="display-type"
                id="display-type-grid"
                checked={this.props.settings.display === 'grid'}
                onChange={($event) => this.handleEnabledChange($event)} />
            <label htmlFor="display-type-grid">Enabled</label>
          </div>

          <fieldset ref="coreSettings">
            <CoreSettingsField id="grid-column-gap"
                label="Grid Column Gap"
                name="gridColumnGap"
                type="text"
                value={this.props.settings['gridColumnGap']}
                onChange={this.handleCoreSettingsChange} />

            <CoreSettingsField id="grid-row-gap"
                label="Grid Row Gap"
                name="gridRowGap"
                type="text"
                value={this.props.settings['gridRowGap']}
                onChange={this.handleCoreSettingsChange} />

            <CoreSettingsField id="grid-template-columns"
                label="Grid template columns"
                name="gridTemplateColumns"
                type="text"
                value={this.props.settings['gridTemplateColumns']}
                onChange={this.handleCoreSettingsChange} />

            <CoreSettingsField id="grid-template-rows"
                label="Grid template rows"
                name="gridTemplateRows"
                type="text"
                value={this.props.settings['gridTemplateRows']}
                onChange={this.handleCoreSettingsChange} />

            <CoreSettingsField id="grid-template-areas"
                label="Grid template areas"
                name="gridTemplateAreas"
                type="text"
                value={this.props.settings['gridTemplateAreas']}
                onChange={this.handleCoreSettingsChange} />

            <CoreSettingsField id="justify-items"
                label="Justify items"
                name="justifyItems"
                type="text"
                value={this.props.settings['justifyItems']}
                onChange={this.handleCoreSettingsChange} />

            <CoreSettingsField id="align-items"
                label="Align items"
                name="alignItems"
                type="text"
                value={this.props.settings['alignItems']}
                onChange={this.handleCoreSettingsChange} />

            <CoreSettingsField id="justify-content"
                label="Justify content"
                name="justifyContent"
                type="text"
                value={this.props.settings['justifyContent']}
                onChange={this.handleCoreSettingsChange} />

            <CoreSettingsField id="align-content"
                label="Align content"
                name="alignContent"
                type="text"
                value={this.props.settings['alignContent']}
                onChange={this.handleCoreSettingsChange} />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CoreSettings;
