import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from '../Modal/Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export const Modal = ({ srcModal, altModal, onCloseModal }) => {
  const onEscape = e => {
    if (e.key === 'Escape') {
      onCloseModal();
    }
  };

  const onClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscape);

    return () => window.removeEventListener('keydown', onEscape);
  });

  return createPortal(
    <div className={css.Overlay} onClick={onClick}>
      <div className={css.Modal}>
        <img src={srcModal} alt={altModal} />
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  srcModal: PropTypes.string.isRequired,
  altModal: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};
