import React, { Component } from 'react';

import Node from '../Node';

import './NodeList.scss';

class NodeList extends Component {
  constructor(props) {
    super(props);

    this.handleNodeClick = this.handleNodeClick.bind(this);
    this.handleDeleteNodeClick = this.handleDeleteNodeClick.bind(this);
  }

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

  handleNodeClick() {
    console.log('node click');
  }

  handleDeleteNodeClick(event, id) {
    event.stopPropagation();

    const index = this.props.nodes.findIndex((node) => node.id === id);

    this.props.removeNodeAtIndex(index);
  }

  render() {
    let addNodeText = 'Add new node';

    return (
      <div className="node-list" style={this.props.settings}>
        {this.props.nodes.map((node) => (
          <Node id={node.id}
              key={node.id.toString()}
              text={node.text}
              onClick={this.handleNodeClick}
              onDeleteButtonClick={this.handleDeleteNodeClick} />
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
