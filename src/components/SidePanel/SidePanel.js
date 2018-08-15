import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AboutInfo from '../AboutInfo';
import CoreSettingsContainer from '../CoreSettings';
import ReferenceInfo from '../ReferenceInfo';

import './SidePanel.scss';

class SidePanel extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired
  }

  static defaultProps = {
    open: true
  }

  constructor(props) {
    super(props);

    this.text = {
      toggleAriaLabelOpen: 'Close side panel',
      toggleAriaLabelClosed: 'Open side panel'
    };
  }

  handleToggleButtonClick() {
    this.props.toggleSidePanel(!this.props.open);
  }

  render() {
    const { open } = this.props;

    return (
      <section className={'side-panel' + (open ? ' is-open' : '')}
          aria-expanded={open}
          id="side-panel">
        <div className="side-panel__wrapper">
          <header className="main-heading">
            <h1>CSS Grid Builder</h1>
          </header>
          <div className="side-panel__content">
            <div className="side-panel__section">
              <CoreSettingsContainer />
            </div>
            <div className="side-panel__section">
              <AboutInfo />
            </div>
            <div className="side-panel__section">
              <ReferenceInfo />
            </div>
          </div>

          <button className="side-panel__toggle-button"
              aria-controls="side-panel"
              aria-label={open ? this.text.toggleAriaLabelOpen : this.text.toggleAriaLabelClosed}
              onClick={() => this.handleToggleButtonClick()}
              title={open ? this.text.toggleAriaLabelOpen : this.text.toggleAriaLabelClosed}></button>
        </div>
      </section>
    )
  }
}

export default SidePanel
