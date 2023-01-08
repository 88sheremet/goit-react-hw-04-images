import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from '../Modal/Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export class Modal extends Component {
  onEscape = e => {
    if (e.key === 'Escape') {
      this.props.onCloseModal();
    }
  };

  onClick = e => {
    if (e.target === e.currentTarget) this.props.onCloseModal();
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);
  }

  render() {
    return createPortal(
      <div className={css.Overlay} onClick={this.onClick}>
        <div className={css.Modal}>
          <img src={this.props.srcModal} alt={this.props.altModal} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  srcModal: PropTypes.string.isRequired,
  altModal: PropTypes.string.isRequired,
};
