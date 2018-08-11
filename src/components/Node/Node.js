import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Node extends Component {
  render() {
    const { text, onClick, onDeleteButtonClick } = this.props;

    return (
      <div className="node-list__node"
          onClick={onClick}>
        <button className="node-list__node-delete-button"
            onClick={($event) => onDeleteButtonClick($event)}>+</button>
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
