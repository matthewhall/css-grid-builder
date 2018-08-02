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
              <label htmlFor="grid-column-gap">Grid column gap</label>
              <input type="text"
                  name="gridColumnGap"
                  id="grid-column-gap"
                  onChange={($event) => this.handleCoreSettingsChange($event)}
                  value={this.props.settings['gridColumnGap']} />
            </div>

            <div className="field">
              <label htmlFor="grid-row-gap">Grid row gap</label>
              <input type="text"
                  name="gridRowGap"
                  id="grid-row-gap"
                  onChange={($event) => this.handleCoreSettingsChange($event)}
                  value={this.props.settings['gridRowGap']} />
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

            <div className="field">
              <label htmlFor="grid-template-areas">Grid template areas</label>
              <input type="text"
                  name="gridTemplateAreas"
                  id="grid-template-areas"
                  onChange={($event) => this.handleCoreSettingsChange($event)}
                  value={this.props.settings['gridTemplateAreas']} />
            </div>

            <div className="field">
              <label htmlFor="justify-items">Justify items</label>
              <input type="text"
                  name="justifyItems"
                  id="justify-items"
                  onChange={($event) => this.handleCoreSettingsChange($event)}
                  value={this.props.settings['justifyItems']} />
            </div>

            <div className="field">
              <label htmlFor="align-items">Align items</label>
              <input type="text"
                  name="alignItems"
                  id="align-items"
                  onChange={($event) => this.handleCoreSettingsChange($event)}
                  value={this.props.settings['alignItems']} />
            </div>

            <div className="field">
              <label htmlFor="justify-content">Justify content</label>
              <input type="text"
                  name="justifyContent"
                  id="justify-content"
                  onChange={($event) => this.handleCoreSettingsChange($event)}
                  value={this.props.settings['justifyContent']} />
            </div>

            <div className="field">
              <label htmlFor="align-content">Align content</label>
              <input type="text"
                  name="alignContent"
                  id="align-content"
                  onChange={($event) => this.handleCoreSettingsChange($event)}
                  value={this.props.settings['alignContent']} />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default CoreSettings;
