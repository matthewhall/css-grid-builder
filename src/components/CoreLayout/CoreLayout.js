import React, { Component } from 'react';
import SidePanel from '../../components/SidePanel';
import './CoreLayout.scss';

class CoreLayout extends Component {
  render() {
    return (
      <main className="main">
        <SidePanel />
      </main>
    );
  }
}

export default CoreLayout;
