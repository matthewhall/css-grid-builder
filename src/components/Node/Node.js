import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Node extends Component {
  render() {
    const { text, id, onClick, onDeleteButtonClick } = this.props;

    return (
      <div className="node-list__node"
          tabIndex="0"
          onClick={onClick}>
        <button className="node-list__node-delete-button"
            aria-label="Delete node"
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
