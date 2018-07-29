import React, { Component } from 'react';

import SidePanel from '../../components/SidePanel';
import NodeListContainer from '../../components/NodeList';

import './CoreLayout.scss';

class CoreLayout extends Component {
  render() {
    return (
      <main className="main">
        <SidePanel />
        <div className="main-content">
          <NodeListContainer />
        </div>
      </main>
    );
  }
}

export default CoreLayout;
