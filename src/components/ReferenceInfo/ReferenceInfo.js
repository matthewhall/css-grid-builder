import React, { Component } from 'react';

class ReferenceInfo extends Component {
  render() {
    return (
      <div className="reference">
        <h2>Reference</h2>
        <ul>
          <li><small><a href="http://caniuse.com/#feat=css-grid">Can I Use: CSS Grid Layout</a></small></li>
          <li><small><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">Mozilla: CSS Grid Layout</a></small></li>
        </ul>
      </div>
    );
  }
}

export default ReferenceInfo;