import React, { Component } from 'react';

import AboutInfo from '../AboutInfo';
import CoreSettings from '../CoreSettings';
import ReferenceInfo from '../ReferenceInfo';

import './SidePanel.scss';

class SidePanel extends Component {
  render() {
    return (
      <section className="side-panel">
        <header className="main-heading">
          <h1>CSS Grid Builder</h1>
          <div className="main-heading__logo">

          </div>
        </header>
        <CoreSettings />
        <AboutInfo />
        <ReferenceInfo />
      </section>
    )
  }
}

export default SidePanel
