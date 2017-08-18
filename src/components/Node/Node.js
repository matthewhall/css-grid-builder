import React, { Component } from 'react';

class Node extends Component {
  render() {
    return (
      <div key={this.props.id} className="node-list__node">
        {this.props.text}
      </div>
    );
  }
}

export default Node;
