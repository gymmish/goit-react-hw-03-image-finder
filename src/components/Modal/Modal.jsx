import { React, Component } from 'react';
import { createPortal } from 'react-dom';

// import PropTypes from 'prop-types';
import { Modalka, Overlay } from './Modal.styled';

// const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
      console.log(e.code);
    }
  };

  handleClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Overlay onClick={this.handleClick}>
        <Modalka>
          <img
            src={this.props.modalImg.img}
            alt={this.props.modalImg.tags}
            key={this.props.modalImg.id}
          />
        </Modalka>
      </Overlay>
      // modalRoot
    );
  }
}
