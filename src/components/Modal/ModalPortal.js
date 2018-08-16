import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalPortal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    rootNode: PropTypes.object.isRequired
  }

  static defaultProps = {
    isOpen: false,
    rootNode: document.body
  }

  constructor(props) {
    super(props);
  }

  render() {
    return this.props.isOpen && (
      <div className="modal"
          ref="modalWrapper"
          aria-hidden={!this.props.isOpen}>
        <div className="modal__content"
            ref="modal"
            role="dialog">
          {this.props.children}
        </div>
        <div className="modal__backdrop"
            ref="modalBackdrop"
            onClick={() => this.props.isOpen = false}></div>
      </div>
    );
  }
}

export default ModalPortal
