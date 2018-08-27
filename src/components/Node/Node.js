import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Node extends Component {
  static propTypes = {
    id: PropTypes.number,
    styles: PropTypes.objectOf(PropTypes.string),
    text: PropTypes.string,
    onClick: PropTypes.func,
    onDeleteButtonClick: PropTypes.func
  }

  static defaultProps = {
    styles: {},
    text: 'div'
  }

  render() {
    const { text, styles, className, id, onClick, onDeleteButtonClick } = this.props;

    return (
      <div className={`node-list__node ${className}`}
          data-id={id}
          tabIndex="0"
          style={styles}
          onClick={($event) => onClick($event)}>
        <button className="node-list__node-delete-button"
            aria-label="Delete node"
            onClick={($event) => onDeleteButtonClick($event, id)}>+</button>
        {text}
      </div>
    );
  }
}

export default Node;
