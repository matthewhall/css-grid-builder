import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Node extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editingText: false
    };
  }

  handleDoubleClick() {
    console.log('double click');
    this.setState({
      editingText: true
    });
  }

  render() {
    const { text, id, onClick, onDeleteButtonClick } = this.props;

    return (
      <div className="node-list__node"
          onClick={onClick}
          onDoubleClick={() => this.handleDoubleClick()}
          contentEditable={this.state.editingText}>
        <button className="node-list__node-delete-button"
            onClick={($event) => onDeleteButtonClick($event, id)}>+</button>
        {text}
      </div>
    );
  }
}

Node.defaultProps = {
  text: 'div'
};

Node.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  onDeleteButtonClick: PropTypes.func
};

export default Node;
