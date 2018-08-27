import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Node from '../Node';
import Modal from '../Modal';
import NodeSettings from '../NodeSettings';

import './NodeList.scss';

class NodeList extends Component {
  static propTypes = {
    lastNodeId: PropTypes.number,
    nodes: PropTypes.array,
    settings: PropTypes.object,
    addNodeAtIndex: PropTypes.func,
    removeNodeAtIndex: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.handleNodeClick = this.handleNodeClick.bind(this);
    this.handleDeleteNodeClick = this.handleDeleteNodeClick.bind(this);
    this.handleNodeStyleChange = this.handleNodeStyleChange.bind(this);

    this.state = {
      isModalOpen: false,
      editingNodeId: null,
      editingNode: null
    };
  }

  handleAddNodeClick() {
    const index = this.props.nodes.length + 1;
    const nextId = this.props.lastNodeId + 1;

    this.props.addNodeAtIndex({
      index: index - 1,
      node: {
        className: `class-${nextId}`,
        text: 'div',
        id: nextId,
        styles: {}
      }
    });
  }

  handleNodeClick(event) {
    const id = Number(event.target.dataset.id);
    const nodeData = this.props.nodes.find((node) => node.id === id);

    if (!nodeData) {
      return;
    }

    this.setState({
      isModalOpen: true,
      editingNodeId: id,
      editingNode: nodeData
    });
  }

  handleDeleteNodeClick(event, id) {
    event.stopPropagation();

    const index = this.props.nodes.findIndex((node) => node.id === id);

    this.props.removeNodeAtIndex(index);
  }

  handleNodeStyleChange(event) {
    if (this.state.editingNodeId === null) {
      return;
    }

    const id = this.state.editingNodeId;
    const prop = event.target.name;
    const value = event.target.value;

    this.props.setNodeGridStyle(id, prop, value);
  }

  render() {
    let addNodeText = 'Add new node';

    return (
      <div className="node-list" style={this.props.settings}>
        {this.props.nodes.map((node) => (
          <Node id={node.id}
              className={node.className}
              key={node.id}
              styles={node.styles}
              text={node.text}
              onClick={this.handleNodeClick}
              onDeleteButtonClick={this.handleDeleteNodeClick} />
        ))}
        <button onClick={() => this.handleAddNodeClick()}
            className="node-list__add-node"
            aria-label={addNodeText}
            title={addNodeText}>+</button>

        <Modal isOpen={this.state.isModalOpen}>
          <NodeSettings nodeData={this.state.editingNode}
              onStyleChange={this.handleNodeStyleChange} />
          <button onClick={() => this.setState({ isModalOpen: false}) }>Close modal</button>
        </Modal>
      </div>
    );
  }
}

export default NodeList;
