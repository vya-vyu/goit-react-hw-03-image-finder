import s from './Modal.module.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handleBackDrop = e => {
    // console.log('target', e.target);
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    return createPortal(
      <div className={s.Overlay} onClick={this.handleBackDrop}>
        <div className={s.Modal}>
          <img
            src={this.props.image.url}
            alt={this.props.image.alt}
            width="600"
          />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
