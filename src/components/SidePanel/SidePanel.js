import React, { Component } from 'react';
import './SidePanel.scss';

class SidePanel extends Component {
  render () {
    return (
      <section className="side-panel">
        <header className="main-heading">
          <h1>CSS Grid Builder</h1>
          <div className="main-heading__logo">

          </div>
        </header>

        <p>CSS Grid Layout is a method of using a grid concept to lay out content, providing a mechanism for authors to divide available space for layout into columns and rows using a set of predictable sizing behaviors.</p>
        <h2>Reference</h2>
        <ul>
          <li><small><a href="http://caniuse.com/#feat=css-grid">Can I Use: CSS Grid Layout</a></small></li>
          <li><small><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">Mozilla: CSS Grid Layout</a></small></li>
        </ul>
      </section>
    )
  }
}

export default SidePanel
