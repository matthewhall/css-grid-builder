import React, { Component } from 'react';
import Node from '../../components/Node';
import './NodeList.scss';

class NodeList extends Component {
  constructor() {
    super();

    this.state = {
      nodes: []
    };

    this.state.nodes.push({
      text: 'div'
    });
  }

  handleAddNodeClick() {
    let state = this.state;

    state.nodes.push({
      text: 'div'
    });

    this.setState(state);
  }

  render() {
    let addNodeText = 'Add new node';

    return (
      <div className="node-list">
        {this.state.nodes.map((node, index) => (
          <Node key={index} text={node.text} />
        ))}
        <button onClick={() => this.handleAddNodeClick()} className="node-list__add-node" aria-label={addNodeText} title={addNodeText}>+</button>
      </div>
    );
  }
}

export default NodeList;
