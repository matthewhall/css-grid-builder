import React, { Component } from 'react';

import Node from '../Node';

import './NodeList.scss';

class NodeList extends Component {
  handleAddNodeClick() {
    const index = this.props.nodes.length + 1;

    this.props.addNodeAtIndex({
      index: index - 1,
      node: {
        text: 'div',
        id: Date.now()
      }
    });
  }

  render() {
    let addNodeText = 'Add new node';

    return (
      <div className="node-list" style={{'display': this.props.settings.display}}>
        {this.props.nodes.map((node, index) => (
          <Node key={node.id.toString()} text={node.text} />
        ))}
        <button onClick={() => this.handleAddNodeClick()}
            className="node-list__add-node"
            aria-label={addNodeText}
            title={addNodeText}>+</button>
      </div>
    );
  }
}

export default NodeList;
