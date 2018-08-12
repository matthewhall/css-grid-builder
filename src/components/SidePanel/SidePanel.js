import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AboutInfo from '../AboutInfo';
import CoreSettingsContainer from '../CoreSettings';
import ReferenceInfo from '../ReferenceInfo';

import './SidePanel.scss';

class SidePanel extends Component {
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
          aria-expanded={open.toString()}
          id="side-panel">
        <div className="side-panel__content">
          <header className="main-heading">
            <h1>CSS Grid Builder</h1>
            <div className="main-heading__logo">

            </div>
          </header>
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
      </section>
    )
  }
}

SidePanel.defaultProps = {
  open: true
};

SidePanel.propTypes = {
  open: PropTypes.bool
};

export default SidePanel
