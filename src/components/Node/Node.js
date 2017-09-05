import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Node extends Component {
  render() {
    return (
      <div className="node-list__node">
        {this.props.text}
      </div>
    );
  }
}

Node.defaultProps = {
  text: 'div'
};

Node.propTypes = {
  text: PropTypes.string
};

export default Node;
