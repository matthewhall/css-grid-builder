import React, { Component } from 'react';
import SidePanel from '../../components/SidePanel';
import NodeList from '../../components/NodeList';
import './CoreLayout.scss';

class CoreLayout extends Component {
  render() {
    return (
      <main className="main">
        <SidePanel />
        <div className="main-content">
          <NodeList />
        </div>
      </main>
    );
  }
}

export default CoreLayout;
