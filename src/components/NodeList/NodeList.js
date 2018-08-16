import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Node from '../Node';
import Modal from '../Modal';

import './NodeList.scss';

class NodeList extends Component {
  constructor(props) {
    super(props);

    this.handleNodeClick = this.handleNodeClick.bind(this);
    this.handleDeleteNodeClick = this.handleDeleteNodeClick.bind(this);

    this.state = {
      isModalOpen: false
    };
  }

  handleAddNodeClick() {
    const index = this.props.nodes.length + 1;

    this.props.addNodeAtIndex({
      index: index - 1,
      node: {
        text: 'div',
        id: this.props.lastNodeId + 1
      }
    });
  }

  handleNodeClick() {
    this.setState({
      isModalOpen: true
    });
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
              key={node.id}
              text={node.text}
              onClick={this.handleNodeClick}
              onDeleteButtonClick={this.handleDeleteNodeClick} />
        ))}
        <button onClick={() => this.handleAddNodeClick()}
            className="node-list__add-node"
            aria-label={addNodeText}
            title={addNodeText}>+</button>
        <Modal isOpen={this.state.isModalOpen}>
          <h2>Hello!</h2>
          <div className="field">
            <textarea />
            <button onClick={() => this.setState({ isModalOpen: false })}>Close modal</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default NodeList;
