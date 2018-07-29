import React, { Component } from 'react';
import Node from '../../components/Node';

import './NodeList.scss';

class NodeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nodes: []
    };

    this.state.nodes.push({
      text: 'div',
      id: Date.now()
    });

    console.log(props);
  }

  handleAddNodeClick() {
    let index = this.state.nodes.length;

    this.addNodeAt(index);
  }

  addNodeAt(index) {
    let nodes = this.state.nodes;

    nodes.splice(index, 0, {
      text: 'div',
      id: Date.now()
    });

    this.setState({
      nodes: nodes
    });
  }

  render() {
    let addNodeText = 'Add new node';

    return (
      <div className="node-list" style={{'display': this.props.settings.display}}>
        {this.state.nodes.map((node, index) => (
          <Node key={node.id.toString()} text={node.text} />
        ))}
        <button onClick={() => this.handleAddNodeClick()} className="node-list__add-node" aria-label={addNodeText} title={addNodeText}>+</button>
      </div>
    );
  }
}

export default NodeList;
