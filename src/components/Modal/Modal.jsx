import { React, Component } from 'react';
import { Modalka, Overlay } from './Modal.styled';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      console.log(event.code);
      this.props.onClose();
    }
  };

  handleClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleClick}>
        <Modalka>
          <img
            src={this.props.modalImg.img}
            alt={this.props.modalImg.tags}
            key={this.props.modalImg.id}
          />
        </Modalka>
      </Overlay>,
      modalRoot
    );
  }
}
