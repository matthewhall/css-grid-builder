import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import ModalPortal from './ModalPortal';

import './Modal.scss';

class Modal extends Component {
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

    this.el = document.createElement('div');
    this.el.classList.add('modal-portal');
  }

  componentDidMount() {
    this.props.rootNode.appendChild(this.el);
  }

  componentWillUnmount() {
    this.props.rootNode.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      <ModalPortal {...this.props} />,
      this.el
    );
  }
}

export default Modal
