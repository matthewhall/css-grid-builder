import React, { Component } from 'react';

class AboutInfo extends Component {
  render() {
    return (
      <div className="about">
        <h2>About</h2>
        <p>CSS Grid Layout is a method of using a grid concept to lay out content, providing a mechanism for authors to divide available space for layout into columns and rows using a set of predictable sizing behaviors.</p>
        <p>You can read more on <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">MDN</a>.</p>
      </div>
    );
  }
}

export default AboutInfo;